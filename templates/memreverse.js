let prefix = `
<p>Implements the <code>void *memreverse_scalar(void *dest, const void *src, size_t n)</code> standard library function.</p>

<ul>
	<li><b>rvv_vsse:</b> uses negative strided store</li>
	<li><b>rvv_vlse:</b> uses negative strided load</li>
	<li><b>rvv_vrgatherei16:</b> uses vrgatherei16</li>
	<li><b>rvv_m1_vrgatherei16:</b> uses multiple LMUL=1 vrgatherei16</li>
</ul>

<h3>Navigation:</h3>
<ul>
	<li><a href="index.html">Return to parent page</a></li>
	<li><a href="https://github.com/camel-cdr/rvv-bench/blob/main/bench/memreverse.S">View source code</a></li>
</ul>
`;
