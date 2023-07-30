
function tooltipsPlugin(opts) {
	let cursortt;

	function init(u, opts, data) {
		let over = u.over;

		let tt = cursortt = document.createElement("div");
		tt.className = "tooltip";
		tt.textContent = "y";
		tt.style.pointerEvents = "none";
		tt.style.position = "absolute";
		tt.style.background = "rgba(0,0,255,0.1)";
		tt.style.display = "none";
		over.appendChild(tt);

		over.addEventListener("mouseleave", () => {
			if (!u.cursor._lock)
				cursortt.style.display = "none";
		});

		over.addEventListener("mouseenter", () => {
			cursortt.style.display = null;
		});
	}

	function setCursor(u) {
		const {left, top, idx} = u.cursor;
		cursortt.style.left = left + 10 + "px";
		cursortt.style.top = top + 10 + "px";
		cursortt.textContent = u.posToVal(top, "y").toFixed(5) + " Bytes/Cycle";
	}

	return { hooks: { init, setCursor, }, };
}

function wheelZoomPlugin(opts) {
	let factor = opts.factor || 0.75;
	return { hooks: { ready: u => {
		let rect = u.over.getBoundingClientRect();
		u.over.addEventListener("wheel", e => {
			e.preventDefault();

			let {left, top} = u.cursor;
			let ys = e.deltaY < 0 ? factor : 2-factor;
			let y1 = rect.height - top;
			let y2 = top;
			let nyMax = u.posToVal(top + y1*ys, "y");
			let nyMin = u.posToVal(top - y2*ys, "y");

			u.batch(() => { u.setScale("y", { min: nyMin, max: nyMax, }); });
		});
	} } };
}
// we patch this in later, with out this the zooming somethimes hangs
function myLogAxisSplits(self, axisIdx, scaleMin, scaleMax, foundIncr, foundSpace, forceMin) {
	const splits = [];

	const logBase = self.scales[self.axes[axisIdx].scale].log;

	const logFn = logBase == 10 ? log10 : log2;

	const exp = floor(logFn(scaleMin));

	foundIncr = pow(logBase, exp);

	if (logBase == 10 && exp < 0)
		foundIncr = roundDec(foundIncr, -exp);

	let split = scaleMin;

	do {
		splits.push(split);
		split = split + foundIncr;

		let dec = fixedDec.get(foundIncr);
		if (dec == undefined) // this part changed
			break;
		if (logBase == 10)
			split = roundDec(split, dec);

		if (split >= foundIncr * logBase)
			foundIncr = split;

	} while (split <= scaleMax);

	return splits;
}

// https://stackoverflow.com/questions/17242144/javascript-convert-hsb-hsv-color-to-rgb-accurately
function hsv2rgb(h,s,v) {
	let f= (n,k=(n+h*6)%6) => v - v*s*Math.max( Math.min(k,4-k,1), 0);
	return [f(5),f(3),f(1)].reduce((a,v)=>a+(~~(v*256)).toString(16).padStart(2,"0"),"#");
}

let colorMap = {};

function randColor(lbl) {
	let c = colorMap[lbl];
	if (c == undefined)
		c = colorMap[lbl] = hsv2rgb(Math.random(), Math.random()*0.4 + 0.6, Math.random()*0.4 + 0.6);
	return c;
}



function makeChart(info) {
	let series = [];

	for (let i = 1; i < info.data.length; i++) {
		series.push({
			label: info.labels[i],
			stroke: randColor(info.labels[i]),
			value: (self, v) => v == null ? null : v.toString(),
		});
	}

	function getSize() {
		return {
			width: window.innerWidth * 0.99,
			height: window.innerHeight * 0.8,
		}
	}

	let opts = {
		title: info.title,
		...getSize(),

		plugins: [
			wheelZoomPlugin({factor: 0.75}),
			tooltipsPlugin(),
		],
		scales: {
			x: { time: false, distr: 2 },
			y: { distr: 3, },
		},
		axes: [ {
			label: "data size",
			values: (self, splits) => splits.map(v => {
					if (v == null) return null;

					if (v < 1024)
						return v.toString() + " B";
					else if ((v /= 1024) < 1024)
						return v.toFixed(1) + " KiB";
					else if ((v /= 1024) < 1024)
						return v.toFixed(1) + " MiB";
					else
						return (v/1024).toFixed(1) + " GiB";
				})
		}, {
			label: "Byte/Cycle",
		},
		],
		series: [
			{},
			...series
		]
	};

	let u = new uPlot(opts, info.data, document.body);
	u.axes.forEach( x => {
		if (x.splits == logAxisSplits)
			x.splits = myLogAxisSplits;
	});
	window.addEventListener("resize", e => {
		u.setSize(getSize());
	});

	return u;
}


document.getElementById("main").insertAdjacentHTML('beforeend', prefix);
