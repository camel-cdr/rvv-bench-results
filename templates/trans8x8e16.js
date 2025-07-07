let prefix = `
<p>This benchmark is designed to mimic the properties of DCT/IDCT kernels, which are common in video processing.</p>
<p>It involves loading 8x8 matrices of 8-bit elements from memory, applying a kernel of operations between rows, transposing the matrices, applying the same kernel again, and finally writing back the rows to strided memory (2d row of image).</p>

<ul>
	<li><b>seq_*:</b> input 8x8 matrices are stored sequentially</li>
	<li><b>zip_*:</b> input 8x8 matrices are stored interleaved based on VLEN</li>
	<li><b>*_single:</b> only processes one 8x8 matrix per iteration, regardless of VLEN</li>
	<li><b>rvv_vslide:</b> transposes using masked <code>vslide1up/vslide1down</code></li>
	<li><b>rvv_vlseg8:</b> transposes through memory using a unit-stride-stores and segmented-loads</li>
	<li><b>rvv_vlseg8:</b> transposes through memory using segmented-stores and unit-stride-loads</li>
	<li><b>rvv_vls:</b> transposes through memory using unit-stride-stores and strided-loads</li>
	<li><b>rvv_vss:</b> transposes through memory using strided-stores and unit-stride-loads</li>
	<li><b>rvv_zip_fake:</b> emulates zvzip using existing instructions (produces wrong result!)</li>
</ul>

<h3>Navigation:</h3>
<ul>
	<li><a href="index.html">Return to parent page</a></li>
	<li><a href="https://github.com/camel-cdr/rvv-bench/blob/main/bench/trans8x8e16.S">View source code</a></li>
</ul>
`;
