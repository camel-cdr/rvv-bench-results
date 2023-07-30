let prefix = `
<p>Implements the <code>void *memset(void *dest, int c, size_t n)</code> standard library function.</p>

<ul>
	<li><b>rvv:</b> reference implementation</li>
	<li><b>rvv_align:</b> aligns the destination pointer to vlenb</li>
	<li><b>rvv_tail:</b> uses manual tail handling, to avoid calling <code>vsetvl</code> in the loop</li>
	<li><b>rvv_tail_4x:</b> like <b>rvv_tail</b>, but unrolled 4 times.</li>
</ul>

<h3>Navigation:</h3>
<ul>
	<li><a href="index.html">Return to parent page</a></li>
	<li><a href="https://github.com/camel-cdr/rvv-bench/blob/main/bench/memset.S">View source code</a></li>
</ul>
`;
