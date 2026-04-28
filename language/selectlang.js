// Source - https://stackoverflow.com/a/46008865
// Posted by M. Waheed, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-28, License - CC BY-SA 3.0

<script>
var language; 
function getLanguage() {
(localStorage.getItem('language') == null) ? setLanguage('en') : false;
$.ajax({ 
url:  '/language/' +  localStorage.getItem('language') + '.json', 
dataType: 'json', async: false, dataType: 'json', 
success: function (lang) { language = lang } });
}

function setLanguage(lang) {
localStorage.setItem('language', lang);
}
</script>
