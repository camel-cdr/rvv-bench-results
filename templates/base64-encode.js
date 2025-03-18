let prefix = `
<p>Implements base64 encode.</p>

<ul>
	<li><b>rvv_LUT*:</b> Uses vrgather and arithmetics to rearrange the bits</li>
	<li><b>rvv_seg_LUT*:</b> Uses segmented load/stores to and arithmetics to rearrange the bits</li>
	<li><b>*_LUT64:</b> Uses 64-element vrgathers to directly convert the sextet to the base64-alphabet</li>
	<li><b>*_LUT16:</b> Uses 16-element vrgathers to look up offsets for converting the sextet to the base64-alphabet</li>
</ul>

<h3>Navigation:</h3>
<ul>
	<li><a href="index.html">Return to parent page</a></li>
	<li><a href="https://github.com/camel-cdr/rvv-bench/blob/main/bench/base64-encode.S">View source code</a></li>
</ul>
`;
