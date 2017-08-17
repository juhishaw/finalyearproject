<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>CKEditor Demo</title>
	<link href="style.css" rel="stylesheet"/>
<script src="ckeditor/ckeditor.js"></script>
<script src="js/jquery.min.js"></script>
<script type="text/javascript">
$(document).ready(function()
{
$("#publish").click(function(){
var postTitle = $("#postTitle").val();
var editorData = editor.getData();
var postBody=editorData.replace(/&nbsp;/gi,' ');
var dataString = 'title='+ postTitle +'&body='+postBody;
$.ajax({
type: "POST",
url: "ajaxPublish.php",
data: dataString,
cache: false,
beforeSend: function(){},
success: function(bid)
{
window.location.replace('blogPage.php?bid='+bid);
}
});
return false;
});

})	
</script>

	
</head>
<body id="main">
<div>

<label>Add New Post</label>
<input type="text" id="postTitle" class="inputText" placeholder="Post title" name="postTitle" />
<textarea id="postBody" name="postBody"></textarea>
<input type="submit" value="Publish" class="wallButton" id="publish"/>
</div>
<script>
var editor=CKEDITOR.replace('postBody');
</script>
</body>
</html>
