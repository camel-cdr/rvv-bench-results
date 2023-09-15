let prefix = `
<p>Implements a function, which swaps the byte order of every 32 bit element in a given array.</p>

<ul>
	<li><b>SWAR_rev8:</b> uses rev8 instruction from the zbb extension</li>
	<li><b>rvv_gather:</b> uses gather with given LMUL</li>
	<li><b>rvv_m1_gather:</b> uses multiple LMUL=1 gathers to permute a vector with the given LMUL</li>
</ul>

<h3>Navigation:</h3>
<ul>
	<li><a href="index.html">Return to parent page</a></li>
	<li><a href="https://github.com/camel-cdr/rvv-bench/blob/main/bench/byteswap.S">View source code</a></li>
</ul>
`;
