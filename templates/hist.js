let prefix = `
<p>Implements a function, which fills a 100 entry histogram with the distance from the origin to random points.</p>

<ul>
	<li><b>rvv_slidedown:</b> calculates the distances using RVV, but increments the histogram with a scalar vslidedown loop.</li>
	<li><b>rvv_assume_no_conflict:</b> uses indexed load/stores to increment histogram and assumes there are no conflicts. This will produce the wrong result, but is supposed to show the performance of the indexed load/stores.</li>
	<li><b>rvv_dup_entries:</b> avoids conflicts by duplicating the histogram entries vl times.</li>
</ul>

<h3>Navigation:</h3>
<ul>
	<li><a href="index.html">Return to parent page</a></li>
	<li><a href="https://github.com/camel-cdr/rvv-bench/blob/main/bench/hist.S">View source code</a></li>
</ul>
`;
