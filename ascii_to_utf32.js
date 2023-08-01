let prefix = `
<p>Implements a <code>void ascii_to_utf32(uint32_t *restrict dest, uint8_t const *restrict src, size_t len)</code> function, which convers a ASCII string to utf32 string. This is basically just zero extending from 1 to 4 bytes.</p>

<ul>
	<li><b>rvv_ext:</b> zero extends to higher LMUL and stores directly</li>
	<li><b>rvv_vsseg:</b> uses segment store</li>
	<li><b>rvv_vss:</b> writes zero, then fills in lower bits with strided store</li>
</ul>

<h3>Navigation:</h3>
<ul>
	<li><a href="index.html">Return to parent page</a></li>
	<li><a href="https://github.com/camel-cdr/rvv-bench/blob/main/bench/ascii_to_utf32.S">View source code</a></li>
</ul>
`;
