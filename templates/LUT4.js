let prefix = `
<p>Implements a function, which modifies input bytes to the result of looking up the lower four bits in a given 4-bit lookup table.</p>

<ul>
	<li><b>rvv_vrgather:</b> uses gather with given LMUL</li>
	<li><b>rvv_m1_vrgather:</b> uses multiple LMUL=1 gathers to permute a vector with the given LMUL</li>
	<li><b>rvv_luxei8:</b> uses unordered indexed load</li>
	<li><b>rvv_loxei8:</b> uses ordered indexed load</li>
</ul>

<h3>Navigation:</h3>
<ul>
	<li><a href="index.html">Return to parent page</a></li>
	<li><a href="https://github.com/camel-cdr/rvv-bench/blob/main/bench/LUT4.S">View source code</a></li>
</ul>
`;
