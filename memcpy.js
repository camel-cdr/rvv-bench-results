let prefix = `
<div id="main">

<header><h1>MangoPi MQ Pro (Allwinner D1, C906) memcpy benchmark</h1></header>

<p>Implements the <code>void *memcpy(void *dest, const void *src, size_t n)</code> standard library function.</p>

<ul>
	<li><b>rvv:</b> reference implementation</li>
	<li><b>rvv_align_dest:</b> aligns the destination pointer to vlenb</li>
	<li><b>rvv_align_src:</b> aligns the source pointer to vlenb</li>
	<li><b>rvv_align_dest_hybrid:</b> aligns the destination pointer to vlenb, but uses the basic <b>rvv</b> implementation for smaller inputs</li>
	<li><b>rvv_tail:</b> uses manual tail handling, to avoid calling <code>vsetvl</code> in the loop</li>
	<li><b>rvv_128:</b> like <b>rvv_tail</b>, but uses a fixed <code>vlenb=128/8</code> for every LMUL</li>
</ul>

<h3>Navigation:</h3>
<ul>
	<li><a href="index.html">Return to main page</a></li>
	<li><a href="https://github.com/camel-cdr/rvv-bench/blob/main/bench/memcpy.S">View source code</a></li>
</ul>
</div>
`;

let postfix = "";
