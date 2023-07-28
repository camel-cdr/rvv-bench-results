let prefix = `
<div id="main">

<header><h1>MangoPi MQ Pro (Allwinner D1, C906) strlen benchmark</h1></header>

<p>Implements the <code>size_t strlen(const char *s)</code> standard library function.</p>

<ul>
	<li><b>rvv:</b> reference implementation with vle8ff.v</li>
	<li><b>rvv_page_aligned:</b> uses vle8.v and manually makes sure to page align the loads. (this requires the programmer to know the pagesize)</li>
</ul>

<h3>Navigation:</h3>
<ul>
	<li><a href="index.html">Return to parent page</a></li>
	<li><a href="https://github.com/camel-cdr/rvv-bench/blob/main/bench/strlen.S">View source code</a></li>
</ul>
</div>
`;

let postfix = "";
