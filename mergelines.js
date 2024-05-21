let prefix = `
<p>Implements a function that removes escaped newlines (<code>\\\\\\n</code>) from a string, and truncates the string accordingly.</p>

<ul>
	<li><b>rvv_vslide:</b> creates mask by shifting the input and doing the comparison twice</li>
	<li><b>rvv_mslide:</b> creates by comparing once, and shifting the masky by 1</li>
	<li><b>rvv_*_skip:</b> like <b>rvv_*</b>, but skips the vcompress.vv step, if nothing needs to be compressed</li>
</ul>

<h3>Navigation:</h3>
<ul>
	<li><a href="index.html">Return to parent page</a></li>
	<li><a href="https://github.com/camel-cdr/rvv-bench/blob/main/bench/mergelines.S">View source code</a></li>
</ul>
`;
