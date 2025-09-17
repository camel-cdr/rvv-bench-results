let prefix = `
<p>Implements a <code>size_t utf8_count(char const *str, size_t len)</code> function, which returns the number of characters (utf32 code points) in a utf8 string.</p>

<ul>
	<li><b>SWARP_popc:</b> uses SWAR to process 8 bytes at a time and </code>__builtin_popcountll()</code>, which defers to a popcount instruction if one is available (bit extension)</li>
	<li><b>SWARP_popc_bithack:</b> like <b>SWARP_popc</b>, but uses bithack implementation of popcount</li>
	<li><b>rvv:</b> basic implementation</li>
	<li><b>rvv_align:</b> aligns the destination pointer to vlenb</li>
	<li><b>rvv_vlmax:</b> handles tail in first iteration and uses vsetvli to set vl=vlmax in each subsequent loop iteration</li>
	<li><b>rvv_tail:</b> uses manual tail handling, to avoid calling <code>vsetvl</code> in the loop</li>
	<li><b>rvv_128:</b> like <b>rvv_tail</b>, but uses a fixed <code>vlenb=128/8</code> for every LMUL</li>
	<li><b>rvv_4x:</b> like <b>rvv</b>, but unrolled 4 times.</li>
	<li><b>rvv_4x_tail:</b> unrolled 4 times and manual tail handling.</li>
</ul>

<h3>Navigation:</h3>
<ul>
	<li><a href="index.html">Return to parent page</a></li>
	<li><a href="https://github.com/camel-cdr/rvv-bench/blob/main/bench/utf8_count.S">View source code</a></li>
</ul>
`;
