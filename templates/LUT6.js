let prefix = `
<p>Implements a function, which modifies input bytes to the result of looking up the lower six bits in a given 6-bit lookup table, as in base64 encode.</p>

<ul>
	<li><b>rvv_vrgather_m4:</b> uses LMUL=4 gather</li>
	<li><b>rvv_m1m2m4_vrgathers_m4:</b> detects VLEN and chooses code paths with LMUL=1/2/4 gathers for VLEN=128/256/>=512 respectively.</li>
	<li><b>rvv_luxei8_m4:</b> uses unordered indexed load</li>
	<li><b>rvv_loxei8_m4:</b> uses ordered indexed load</li>
</ul>

<p>
The goal is to measure the overhead of divergent code paths depending on LMUL within the loop body.
It should be minimal since the branches will always be predicted.
</p>

<h3>Navigation:</h3>
<ul>
	<li><a href="index.html">Return to parent page</a></li>
	<li><a href="https://github.com/camel-cdr/rvv-bench/blob/main/bench/LUT6.S">View source code</a></li>
</ul>
`;
