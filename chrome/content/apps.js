if ( typeof wappalyzer != 'undefined' ) {
	wappalyzer.cats = {
		 1: { name: 'CMS',                  plural: 'CMS' },
		 2: { name: 'Message Board',        plural: 'Message Boards' },
		 3: { name: 'Database manager',     plural: 'Database managers' },
		 4: { name: 'Documentation tool',   plural: 'Documentation tools' },
		 5: { name: 'Widget',               plural: 'Widgets' },
		 6: { name: 'Web shop',             plural: 'Web shops' },
		 7: { name: 'Photo gallery',        plural: 'Photo galleries' },
		 8: { name: 'Wiki',                 plural: 'Wikis' },
		 9: { name: 'Hosting panel',        plural: 'Hosting panels' },
		10: { name: 'Analytics',            plural: 'Analytics' },
		11: { name: 'Blog',                 plural: 'Blogs' },
		12: { name: 'JavaScript framework', plural: 'JavaScript frameworks' },
		13: { name: 'Issue tracker',        plural: 'Issue trackers' },
		14: { name: 'Video Player',         plural: 'Video Players' },
		15: { name: 'Comment System',       plural: 'Comment Systems' },
		16: { name: 'CAPTCHA',              plural: 'CAPTCHAs' },
		17: { name: 'Font script',          plural: 'Font scripts' },
		18: { name: 'Web framework',        plural: 'Web frameworks' },
		19: { name: 'Miscellaneous',        plural: 'Miscellaneous' },
		20: { name: 'Editor',               plural: 'Editors' },
		21: { name: 'LMS',                  plural: 'LMS' },
		22: { name: 'Web server',           plural: 'Web servers' },
		23: { name: 'Cache tool',           plural: 'Cache tools' },
		24: { name: 'Rich text editor',     plural: 'Rich text editors' }
	};

	wappalyzer.apps = {
		'1C-Bitrix':             { cats: { 1:  1 }, html: /(<link[^>]+components\/bitrix|<script[^>]+1c\-bitrix)/i },
		'2z Project':            { cats: { 1:  1 }, html: /<meta name=("|')generator("|') [^>]+2z project/i },
		'AddThis':               { cats: { 1:  5 }, html: /<script[^>]* src=("|')[^>]*addthis\.com\/js/ },
		'Adobe GoLive':          { cats: { 1: 20 }, html: /<meta name=("|')generator("|') [^>]+Adobe GoLive/i },
		'Advanced Web Stats':    { cats: { 1: 10 }, html: /aws.src = [^<]+caphyon\-analytics/i },
		'Amiro.CMS':             { cats: { 1:  1 }, html: /<meta name=("|')generator("|') [^>]+Amiro/i },
		'Apache':                { cats: { 1: 22 }, headers: { 'Server': /Apache/i } },
		'Apache Tomcat':         { cats: { 1: 22 }, headers: { 'Server': /Apache-Coyote/i } },
		'Atlassian Confluence':  { cats: { 1:  8 }, html: /Powered by <a href=.http:\/\/www\.atlassian\.com\/software\/confluence/i },
		'AWStats':               { cats: { 1: 10 }, html: /<meta name=("|')generator("|') [^>]+AWStats/i },
		'Backbone.js':           { cats: { 1: 12 }, html: /<script[^>]* src=("|')[^>]*backbone[^>]*\.js/i, env: /^Backbone$/ },
		'BIGACE':                { cats: { 1:  1 }, html: /(<meta name=("|')generator("|') [^>]+BIGACE|Powered by <a href=("|')[^>]+BIGACE|<!--\s+Site is running BIGACE)/i },
		'BigDump':               { cats: { 1:  3 }, html: /<!-- <h1>BigDump: Staggered MySQL Dump Importer/ },
		'blip.tv':               { cats: { 1: 14 }, html: /<(param|embed)[^>]+blip\.tv\/play/i },
		'Blogger':               { cats: { 1: 11 }, html: /<meta content=("|')blogger("|') [^>]+generator/i, url: /^(www.)?.+\.blogspot\.com/i },
		'Bugzilla':              { cats: { 1: 13 }, html: /<[^>]+(id|title|name)=("|')bugzilla/i },
		'Burning Board':         { cats: { 1:  2 }, html: /<a href=('|")[^>]+woltlab\.com.+Burning Board/i },
		'chartbeat':             { cats: { 1: 10 }, html: /function loadChartbeat\(\) {/i },
		'Chamilo':               { cats: { 1: 21 }, html: /<meta name=("|')generator("|') [^>]+Chamilo/i, headers: { 'X-Powered-By': /Chamilo/ } },
		'Cherokee':              { cats: { 1: 22 }, headers: { 'Server': /Cherokee/i } },
		'ClickTale':             { cats: { 1: 10 }, html: /if\(typeof ClickTale(Tag)*==("|')function("|')\)/ },
		'Clicky':                { cats: { 1: 10 }, html: /<script src=("|')http:\/\/static\.getclicky\.com/i },
		'CMS Made Simple':       { cats: { 1:  1 }, html: /<meta name=("|')generator("|') [^>]+CMS Made Simple/i },
		'CO2Stats':              { cats: { 1: 10 }, html: /src=("|')http:\/\/www\.co2stats\.com\/propres\.php/ },
		'comScore':              { cats: { 1: 10 }, html: /<i{1}frame[^>]* (id=("|')comscore("|')|scr=[^>]+comscore)/ },
		'Concrete5':             { cats: { 1:  1 }, html: /<meta name=("|')generator("|') [^>]+concrete5/i },
		'Contao':                { cats: { 1:  1 }, html: /(<!--\s+This website is powered by (TYPOlight|Contao)|<link[^>]+(typolight|contao).css)/i },
		'Contens':               { cats: { 1:  1 }, html: /<meta name=("|')generator("|') [^>]+contens/i },
		'ConversionLab':         { cats: { 1: 10 }, html: /<script[^>]* src=("|')http:\/\/conversionlab\.trackset\.com\/track\/tsend\.js("|')/ },
		'Coppermine':            { cats: { 1:  7 }, html: /<!--Coppermine Photo Gallery/i },
		'Cotonti':               { cats: { 1:  1 }, html: /<meta name=("|')generator("|') [^>]+Cotonti/i },
		'cPanel':                { cats: { 1:  9 }, html: /<!-- cPanel/i },
		'Crazy Egg':             { cats: { 1: 10 }, html: /<script type=("|')text\/javascript("|') src=("|')[^>]+cetrk\.com\/pages\/scripts\/[0-9]+\/[0-9]+\.js("|')/ },
		'CS Cart':               { cats: { 1:  6 }, html: /&nbsp;Powered by (<a href=.http:\/\/www\.cs\-cart\.com|CS\-Cart)/i },
		'CubeCart':              { cats: { 1:  6 }, html: /Powered by <a href=.http:\/\/www\.cubecart\.com/i },
		'cufon':                 { cats: { 1: 17 }, html: /(<script[^>]* src=("|')[^>]*cufon\-yui\.js|<script[^>]*>[^<]+Cufon\.now\(\))/i },
		'd3':                    { cats: { 1: 12 }, html: /<script[^>]*src=[^>]+d3[^>]*\.js/i, env: 'd3' },
		'Danneo CMS':            { cats: { 1:  1 }, html: /<meta name=("|')generator("|') [^>]+Danneo/i },
		'DataLife Engine':       { cats: { 1:  1 }, html: /<meta name=("|')generator("|') [^>]+DataLife Engine/i },
		'DHTMLX':                { cats: { 1: 12 }, html: /<script [^>]+dhtmlxcommon\.js/i },
		'DirectAdmin':           { cats: { 1:  9 }, html: /<a[^>]+>DirectAdmin<\/a> Web Control Panel/i },
		'Disqus':                { cats: { 1: 15 }, html: /(<div[^>]+id=("|')disqus_thread("|')|<script[^>]+disqus_url)/ },
		'dojo':                  { cats: { 1: 12 }, html: /<script[^>]* src=("|')[^>]*dojo(\.xd)?\.js/i, env: /^dojo$/ },
		'Dokeos':                { cats: { 1: 21 }, html: /(<meta name=("|')generator("|') [^>]+Dokeos|Portal <a[^>]+>Dokeos|@import "[^"]+dokeos_blue)/i, headers: { 'X-Powered-By': /Dokeos/ } },
		'DokuWiki':              { cats: { 1:  8 }, html: /<meta name=("|')generator("|') [^>]+DokuWiki/i },
		'DotNetNuke':            { cats: { 1:  1 }, html: /(<meta name=("|')generator("|') [^>]+DotNetNuke|<!\-\- by DotNetNuke Corporation)/i },
		'DreamWeaver':           { cats: { 1: 20 }, html: /(<!\-\-[^>]*(InstanceBeginEditable|Dreamweaver[^>]+target|DWLayoutDefaultTable)|function MM_preloadImages\(\) {)/ },
		'Drupal':                { cats: { 1:  1 }, html: /(<script [^>]+drupal\.js|jQuery\.extend\(Drupal\.settings, \{|Drupal\.extend\(\{ settings: \{|<link[^>]+sites\/(default|all)\/themes\/|<style[^>]+sites\/(default|all)\/(themes|modules)\/)/i, headers: { 'X-Drupal-Cache': /.*/, 'Expires': /19 Nov 1978/ }, env: /^Drupal$/ },
		'Dynamicweb':            { cats: { 1:  1 }, html: /<meta name=("|')generator("|') [^>]+Dynamicweb/i },
		'e107':                  { cats: { 1:  1 }, html: /<script [^>]+e107\.js/i },
		'ExtJS':                 { cats: { 1: 12 }, html: /<script[^>]* src=("|')[^>]*ext\-base\.js("|')/i, env: /^Ext$/ },
		'ExpressionEngine':      { cats: { 1:  1 }, headers: { 'Set-Cookie': /exp_last_activity/ } },
		'eZ Publish':            { cats: { 1:  1 }, html: /<meta name=("|')generator("|') [^>]+eZ Publish/i },
		'FluxBB':                { cats: { 1:  2 }, html: /Powered by (<strong>)?<a href=("|')[^>]+fluxbb/i },
		'Flyspray':              { cats: { 1: 13 }, html: /(<a[^>]+>Powered by Flyspray|<map id=("|')projectsearchform)/ },
		'FrontPage':             { cats: { 1: 20 }, html: /(<meta name=("|')GENERATOR("|') [^>]+Microsoft FrontPage|<html[^>]+urn:schemas\-microsoft\-com:office:office)/i },
		'Get Satisfaction':      { cats: { 1: 13 }, html: /var feedback_widget = new GSFN\.feedback_widget\(feedback_widget_options\)/ },
		'Google Analytics':      { cats: { 1: 10 }, html: /(\.google\-analytics\.com\/ga\.js|<script src=("|')[^"]+google-analytics\.com\/urchin\.js("|'))/i, env: /^gaGlobal$/ },
		'Google Font API':       { cats: { 1: 17 }, html: /<link[^>]* href=("|')http:\/\/fonts\.googleapis\.com/ },
		'Google Friend Connect': { cats: { 1:  5 }, html: /<script[^>]* src=("|')[^>]*google.com\/friendconnect/i },
		'Google Maps':           { cats: { 1:  5 }, html: /(<script[^>]* src=("|')[^>]*maps\.google\.com\/maps\?file=api|maps\.google\.com\/maps\/api\/staticmap)/i },
		'Graffiti CMS':          { cats: { 1:  1 }, html: /<meta name=("|')generator("|') [^>]+Graffiti CMS/i },
		'Gravity Insights':      { cats: { 1: 10 }, html: /gravityInsightsParams\.site_guid = '/ },
		'Hotaru CMS':            { cats: { 1:  1 }, html: /<meta name=("|')generator("|') [^>]+Hotaru CMS/i },
		'IIS':                   { cats: { 1: 22 }, headers: { 'Server': /IIS/i } },
		'InstantCMS':            { cats: { 1:  1 }, html: /<meta name=("|')generator("|') [^>]+InstantCMS/i },
		'IPB':                   { cats: { 1:  2 }, html: /<script [^>]+jscripts\/ips_/i },
		'iWeb':                  { cats: { 1: 20 }, html: /<meta name=("|')generator("|') [^>]+iWeb/i },
		'Jalios':                { cats: { 1:  1 }, html: /<meta name=("|')generator("|') [^>]+Jalios/i },
		'Joomla':                { cats: { 1:  1 }, html: /(<meta name=("|')generator("|') [^>]+Joomla|<!\-\- JoomlaWorks "K2")/i, headers: { 'X-Content-Encoded-By': /Joomla/ } },
		'jQuery UI':             { cats: { 1: 12 }, html: /<script[^>]* src=("|')[^>]*jquery\-ui[^>]*\.js/i },
		'jQuery':                { cats: { 1: 12 }, html: /<script[^>]* src=("|')[^>]*jquery[^>]*\.js/i, env: /^jQuery$/ },
		'JTL Shop':              { cats: { 1:  6 }, html: /(<input[^>]+name=('|")JTLSHOP|<a href=('|")jtl\.php)/i },
		'K2':                    { cats: { 1: 19 }, html: /<!\-\- JoomlaWorks "K2"/ },
		'Kampyle':               { cats: { 1: 10 }, html: /<script[^>]* src=("|')http:\/\/cf\.kampyle\.com\/k_button\.js("|')/ },
		'Kentico CMS':           { cats: { 1:  1 }, html: /<meta name=("|')generator("|') [^>]+Kentico CMS/i },
		'Koego':                 { cats: { 1: 10 }, html: /<script[^>]* src=("|')http\:\/\/tracking\.koego\.com\/end\/ego\.js("|')/ },
		'Kolibri CMS':           { cats: { 1:  1 }, html: /<meta name=("|')copyright("|') [^>]+Kolibri/i },
		'Koobi':                 { cats: { 1:  1 }, html: /<meta name=("|')generator("|') [^>]+Koobi/i },
		'lighttpd':              { cats: { 1: 22 }, headers: { 'Server': /lighttpd/i } },
		'LiveJournal':           { cats: { 1: 11 }, url: /^(www.)?.+\.livejournal\.com/i },
		'Lotus Domino':          { cats: { 1: 22 }, headers: { 'Server': /Lotus\-Domino/i } },
		'Magento':               { cats: { 1:  6 }, html: /var BLANK_URL = '[^>]+js\/blank\.html'/i },
		'Mambo':                 { cats: { 1:  1 }, html: /<meta name=("|')generator("|') [^>]+Mambo/i },
		'MantisBT':              { cats: { 1: 13 }, html: /<img[^>]+ alt=("|')Powered by Mantis Bugtracker/i },
		'MaxSite CMS':           { cats: { 1:  1 }, html: /<meta name=("|')generator("|') [^>]+MaxSite CMS/i },
		'MediaWiki':             { cats: { 1:  8 }, html: /(<meta name=("|')generator("|') [^>]+MediaWiki|<a[^>]+>Powered by MediaWiki<\/a>|<[^>]+id=("|')t\-specialpages)/i },
		'Meebo':                 { cats: { 1:  5 }, html: /(<iframe id=("|')meebo\-iframe("|')|Meebo\('domReady'\))/ },
		'Microsoft ASP.NET':     { cats: { 1: 18 }, html: /<input[^>]+name=("|')__VIEWSTATE/, headers: { 'X-Powered-By': /ASP\.NET/, 'X-AspNet-Version': /.+/ } },
		'Microsoft SharePoint':  { cats: { 1:  1 }, html: /<meta name=("|')generator("|') [^>]+Microsoft SharePoint/i, headers: { 'MicrosoftSharePointTeamServices': /.*/, 'X-SharePointHealthScore': /.*/, 'SPRequestGuid': /.*/ } },
		'MiniBB':                { cats: { 1:  2 }, html: /<a href=("|')[^>]+minibb.+\s+<!--End of copyright link/i },
		'Mint':                  { cats: { 1: 10 }, html: /<script[^>]* src=("|')[^>]*mint\/\?js/i },
		'Mixpanel':              { cats: { 1: 10 }, html: /<script[^>]* src=("|')[^>]*api\.mixpanel\.com\/track/i },
		'MochiKit':              { cats: { 1: 12 }, html: /<script[^>]* src=("|')[^>]*MochiKit\.js/i, env: /^MochiKit$/ },
		'Modernizr':             { cats: { 1: 12 }, html: /<script[^>]* src=("|')[^>]*modernizr[^>]*\.js/i },
		'MODx':                  { cats: { 1:  1 }, html: /(<a[^>]+>Powered by MODx<\/a>|var el= \$\('modxhost'\);|<script type=("|')text\/javascript("|')>var MODX_MEDIA_PATH = "media";)|<(link|script)[^>]+assets\/(templates|snippets)\//i },
		'Mollom':                { cats: { 1: 16 }, html: /(<script[^>]* src=("|')[^>]*mollom\.js|<img[^>]+\/.mollom\/.com)/i },
		'Moodle':                { cats: { 1: 21 }, html: /(var moodleConfigFn = function\(me\)|<img[^>]+moodlelogo)/i },
		'Moogo':                 { cats: { 1:  1 }, html: /<script[^>]* src=("|')[^"']+kotisivukone.js/ },
		'MooTools':              { cats: { 1: 12 }, html: /<script[^>]* src=("|')[^>]*mootools[^>]*\.js("|')/i, env: /^MooTools$/ },
		'Movable Type':          { cats: { 1:  1 }, html: /<meta name=("|')generator("|') [^>]+Movable Type/i },
		'MyBB':                  { cats: { 1:  2 }, html: /(<script [^>]+\s+<!--\s+lang\.no_new_posts|<a[^>]* title=("|')Powered By MyBB)/i },
		'MyBlogLog':             { cats: { 1:  5 }, html: /<script[^>]* src=("|')[^>]*pub\.mybloglog\.com/i },
		'Mynetcap':              { cats: { 1:  1 }, html: /<meta name=("|')generator("|') [^>]+Mynetcap/i },
		'Nedstat':               { cats: { 1: 10 }, html: /sitestat\(("|')http:\/\/nl\.sitestat\.com/ },
		'Nginx':                 { cats: { 1: 22 }, headers: { 'Server': /nginx/i } },
		'nopCommerce':           { cats: { 1:  6 }, html: /(<!\-\-Powered by nopCommerce|Powered by: <a[^>]+nopcommerce)/i },
		'OneStat':               { cats: { 1: 10 }, html: /var p=("|')http("|')\+\(d\.URL\.indexOf\('https:'\)==0\?'s':''\)\+("|'):\/\/stat\.onestat\.com\/stat\.aspx\?tagver/i },
		'OpenCart':              { cats: { 1:  6 }, html: /(Powered By <a href=("|')[^>]+OpenCart|route = getURLVar\(("|')route)/i },
		'openEngine':            { cats: { 1:  1 }, html: /<meta[^>]+openEngine/i },
		'osCommerce':            { cats: { 1:  6 }, html: /<!-- header_eof \/\/-->|<a[^>]*(osCsid|cPath)/i },
		'osCSS':                 { cats: { 1:  6 }, html: /<body onload=("|')window\.defaultStatus='oscss templates';("|')/i },
		'PANSITE':               { cats: { 1:  1 }, html: /<meta NAME=("|')(DC\.)?Generator("|')[^>]+PANSITE/i },
		'papaya CMS':            { cats: { 1:  1 }, html: /<link[^>]*\/papaya-themes\//i },
		'PHP-Fusion':            { cats: { 1:  1 }, html: /Powered by <a href=("|')[^>]+php-fusion/i },
		'PHP-Nuke':              { cats: { 1:  2 }, html: /(<meta name=("|')generator("|') [^>]+PHP-Nuke|<[^>]+Powered by PHP\-Nuke)/i },
		'phpBB':                 { cats: { 1:  2 }, html: /(Powered by (<a href=("|')[^>]+)?phpBB|<meta name=("|')copyright("|') [^>]+phpBB Group)/i },
		'phpDocumentor':         { cats: { 1:  4 }, html: /<!-- Generated by phpDocumentor/ },
		'phpMyAdmin':            { cats: { 1:  3 }, html: /(var pma_absolute_uri = '|PMA_sendHeaderLocation\(|<title>phpMyAdmin<\/title>)/i },
		'phpPgAdmin':            { cats: { 1:  3 }, html: /(<title>phpPgAdmin<\/title>|<span class=("|')appname("|')>phpPgAdmin)/i },
		'Piwik':                 { cats: { 1: 10 }, html: /var piwikTracker = Piwik\.getTracker\(/i },
		'Plesk':                 { cats: { 1:  9 }, html: /<script[^>]* src=("|')[^>]*common\.js\?plesk/i },
		'Plone':                 { cats: { 1:  1 }, html: /<meta name=("|')generator("|') [^>]+Plone/i },
		'Plura':                 { cats: { 1: 19 }, html: /<iframe src="http:\/\/pluraserver\.com/ },
		'posterous':             { cats: { 1:  1, 2: 11 }, html: /<div class=("|')posterous/i },
		'Prestashop':            { cats: { 1:  6 }, html: /(<meta name=("|')generator("|') [^>]+PrestaShop|Powered by <a href=("|')[^>]+PrestaShop)/i },
		'Prototype':             { cats: { 1: 12 }, html: /<script[^>]* src=("|')[^>]*(prototype|protoaculous)\.js("|')/i, env: /^Prototype$/ },
		'Protovis':              { cats: { 1: 12 }, html: /<script[^>]* src=("|')[^>]*protovis[^>]*\.js/i, env: /^protovis$/ },
		'punBB':                 { cats: { 1:  2 }, html: /Powered by <a href=("|')[^>]+punbb/i },
		'Quantcast':             { cats: { 1: 10 }, html: /<script[^>]* src=("|')http:\/\/edge\.quantserve\.com\/quant\.js("|')>/i, env: /^quantserve$/ },
		'Quick.Cart':            { cats: { 1:  6 }, html: /<a href="[^>]+opensolution\.org\/">Powered by/i },
		'Raphael':               { cats: { 1: 12 }, html: /<script[^>]* src=("|')[^>]*raphael[^>]*\.js/i, env: /^Raphael$/ },
		'reCAPTCHA':             { cats: { 1: 16 }, html: /(<div[^>]+id=("|')recaptcha_image|<script[^>]+ src=("|')(api\-secure\.recaptcha\.net|recaptcha_ajax\.js))/ },
		'Reddit':                { cats: { 1:  2 }, html: /(<script[^>]+>var reddit = {|<a[^>]+Powered by Reddit|powered by <a[^>]+>reddit<)/i, url: /^(www.)?reddit\.com/ },
		'Redmine':               { cats: { 1: 13 }, html: /(<meta name=("|')description("|')Redmine("|')|Powered by <a href=("|')[^>]+Redmine)/i },
		'Reinvigorate':          { cats: { 1: 10 }, html: /reinvigorate\.track\("/ },
		'S.Builder':             { cats: { 1:  1 }, html: /<meta name=("|')generator("|') [^>]+S\.Builder/i },
		's9y':                   { cats: { 1:  1 }, html: /<meta name=("|')Powered-By("|') [^>]+Serendipity/i },
		'script.aculo.us':       { cats: { 1: 12 }, html: /<script[^>]* src=("|')[^>]*(scriptaculous|protoaculous)\.js("|')/i, env: /^Scriptaculous$/ },
		'ShareThis':             { cats: { 1:  5 }, html: /<script[^>]+ src=("|')[^"']+w\.sharethis\.com\//i },
		'sIFR':                  { cats: { 1: 17 }, html: /<script[^>]* src=("|')[^>]*sifr\.js/i },
		'Site Meter':            { cats: { 1: 10 }, html: /<script[^>]* src=("|')http:\/\/[^.]+\.sitemeter.com\/js\/counter\.js\?site=/i },
		'SiteCatalyst':          { cats: { 1: 10 }, html: /var s_code=s\.t\(\);if\(s_code\)document\.write\(s_code\)/i },
		'SiteEdit':              { cats: { 1:  1 }, html: /<meta name=("|')generator("|') [^>]+SiteEdit/i },
		'SMF':                   { cats: { 1:  2 }, html: /<script [^>]+\s+var smf_/i },
		'sNews':                 { cats: { 1:  1 }, html: /<meta name=("|')Generator("|') [^>]+sNews/ },
		'Snoobi':                { cats: { 1: 10 }, html: /<script[^>]* src=("|')[^"']+snoobi\.com\/snoop\.php/ },
		'SOBI 2':                { cats: { 1: 19 }, html: /(<!\-\- start of Sigsiu Online Business Index|<div[^>]* class=("|')sobi2)/i },
		'SPIP':                  { cats: { 1:  1 }, html: /<meta name=("|')generator("|') [^>]+SPIP/i, headers: { 'X-Spip-Cache': /.*/ } },
		'SQL Buddy':             { cats: { 1:  3 }, html: /(<title>SQL Buddy<\/title>|<[^>]+onclick=("|')sideMainClick\(("|')home\.php)/i },
		'Squarespace':           { cats: { 1:  1 }, html: /Squarespace\.Constants\.CURRENT_MODULE_ID/i },
		'Squiz Matrix':          { cats: { 1:  1 }, html: /(  Running (MySource|Squiz) Matrix|<meta name=("|')generator("|') [^>]+Squiz Matrix)/i, 'X-Powered-By': /Squiz Matrix/ },
		'StatCounter':           { cats: { 1: 10 }, html: /<script[^>]* src=("|')http:\/\/www\.statcounter\.com\/counter\/counter/i },
		'SWFObject':             { cats: { 1: 19 }, html: /<script[^>]+swfobject[^"']*\.js/i },
		'swift.engine':          { cats: { 1:  1 }, headers: { 'X-Powered-By': /swift\.engine/ } },
		'Swiftlet':              { cats: { 1:  1, 2: 18 }, html: /(<meta name=("|')generator("|') [^>]+Swiftlet|Powered by <a href=("|')[^>]+Swiftlet)/i, headers: { 'X-Swiftlet-Cache': /.*/, 'X-Powered-By': /Swiftlet/ } },
		'Textpattern CMS':       { cats: { 1:  1 }, html: /<meta name=("|')generator("|') [^>]+Textpattern/i },
		'TomatoCart':            { cats: { 1:  6 }, html: /<meta name=("|')generator("|') [^>]+TomatoCart/i },
		'Trac':                  { cats: { 1: 13 }, html: /(<a id=("|')tracpowered)/i },
		'Tumblr':                { cats: { 1: 11 }, html: /<iframe src=("|')http:\/\/www\.tumblr\.com/i, url: /^(www.)?.+\.tumblr\.com/i, headers: { 'X-Tumblr-Usec': /.*/ } },
		'Twilight CMS':          { cats: { 1:  1 }, headers: { 'X-Powered-CMS': /Twilight CMS/ } },
		'Typekit':               { cats: { 1: 17 }, html: /<script[^>]* src=("|')[^>]*use.typekit.com/i, env: /^Typekit$/ },
		'TypePad':               { cats: { 1: 11 }, html: /<meta name=("|')generator("|') [^>]+typepad/i, url: /^(www.)?.+\.typepad\.com/i },
		'TYPO3':                 { cats: { 1:  1 }, html: /(<meta name=("|')generator("|') [^>]+TYPO3|<(script[^>]* src|link[^>]* href)=[^>]*fileadmin)/i, url: /\/typo3/i },
		'Ubercart':              { cats: { 1:  6 }, html: /<script[^>]* src=("|')[^>]*uc_cart\/uc_cart_block\.js/i },
		'Umbraco':               { cats: { 1:  1 }, headers: { 'X-Umbraco-Version': /.+/ } },
		'Underscore.js':         { cats: { 1: 12 }, html: /<script[^>]* src=("|')[^>]*underscore[^>]*\.js/i, env: /^_.VERSION$/ },
		'Vanilla':               { cats: { 1:  2 }, html: /<body id=("|')(DiscussionsPage|vanilla)/i, headers: { 'X-Powered-By': /Vanilla/ } },
		'Varnish':               { cats: { 1: 22 }, headers: { 'X-Varnish': /.+/, 'X-Varnish-Age': /.+/, 'X-Varnish-Cache': /.+/, 'X-Varnish-Action': /.+/, 'X-Varnish-Hostname': /.+/, 'Via': /Varnish/ } },
		'vBulletin':             { cats: { 1:  2 }, html: /<meta name=("|')generator("|') [^>]+vBulletin/i },
		'viennaCMS':             { cats: { 1:  1 }, html: /powered by <a href=("|')[^>]+viennacms/i },
		'Vignette':              { cats: { 1:  1 }, html: /<[^>]+?=("|')(vgn\-ext|vgnext)/i },
		'Vimeo':                 { cats: { 1: 14 }, html: /<(param|embed)[^>]+vimeo\.com\/moogaloop/i },
		'VirtueMart':            { cats: { 1:  6 }, html: /<div id=("|')vmMainPage/ },
		'VisualPath':            { cats: { 1: 10 }, html: /<script[^>]* src=("|')http:\/\/visualpath[^\/]*\.trackset\.it\/[^\/]+\/track\/include\.js("|')/ },
		'Vox':                   { cats: { 1: 11 }, url: /^(www.)?.+\.vox\.com/i },
		'VP-ASP':                { cats: { 1:  6 }, html: /(<a[^>]+>Powered By VP\-ASP Shopping Cart<\/a>|<script[^>]* src=("|')[^>]*vs350\.js)/ },
		'W3Counter':             { cats: { 1: 10 }, html: /<script[^>]* src=("|')http:\/\/www\.w3counter\.com\/tracker\.js("|')>/i },
		'Web Optimizer':         { cats: { 1: 10 }, html: /<title [^>]*lang=("|')wo("|')>/ },
		'webEdition':            { cats: { 1:  1 }, html: /(<meta name=("|')generator("|') [^>]+webEdition|<meta name=("|')DC.title("|') [^>]+webEdition)/i },
		'WebGUI':                { cats: { 1:  1 }, html: /<meta name=("|')generator("|') [^>]+WebGUI/i },
		'WebPublisher':          { cats: { 1:  1 }, html: /<meta name=("|')generator("|') [^>]+WEB\|Publisher/i },
		'WebsiteBaker':          { cats: { 1:  1 }, html: /<meta name=("|')generator("|') [^>]+WebsiteBaker/i },
		'Webtrekk':              { cats: { 1: 10 }, html: /var webtrekk = new Object/ },
		'Webtrends':             { cats: { 1: 10 }, html: /<img[^>]+id=("|')DCSIMG("|')[^>]+webtrends/i },
		'Weebly':                { cats: { 1:  1 }, html: /<[^>]+class=("|')weebly/i },
		'WikkaWiki':             { cats: { 1:  8 }, html: /(Powered by <a href=("|')[^>]+WikkaWiki|<meta name=("|')generator("|') [^>]+WikkaWiki)/i },
		'Wolf CMS':              { cats: { 1:  1 }, html: /<a href=("|')[^>]+wolfcms.org.+Wolf CMS.+inside/i },
		'Woopra':                { cats: { 1: 10 }, html: /<script[^>]* src=("|')[^>]*static\.woopra\.com/i },
		'WordPress':             { cats: { 1:  1, 2: 11 }, html: /(<link rel=("|')stylesheet("|') [^>]+wp-content|<meta name=("|')generator("|') [^>]+WordPress)/i },
		'xajax':                 { cats: { 1: 12 }, html: /<script[^>]* src=("|')[^>]*xajax_core\.js/i },
		'XenForo':               { cats: { 1:  2 }, html: /(jQuery\.extend\(true, XenForo|Forum software by XenForo&trade;|<!\-\-XF:branding)/ },
		'XiTi':                  { cats: { 1: 10 }, html: /<[^>]+src=("|')[^>]+xiti.com\/hit.xiti/i },
		'XMB':                   { cats: { 1:  2 }, html: /<!-- Powered by XMB/i },
		'XOOPS':                 { cats: { 1:  1 }, html: /<meta name=("|')generator("|') [^>]+XOOPS/i },
		'xtCommerce':            { cats: { 1:  6 }, html: /(<meta name=("|')generator("|') [^>]+xt:Commerce|<div class=("|')copyright("|')>.+<a[^>]+>xt:Commerce)/i },
		'YaBB':                  { cats: { 1:  2 }, html: /Powered by <a href=("|')[^>]+yabbforum/i },
		'Yahoo! Web Analytics':  { cats: { 1: 10 }, html: /<script[^>]* src=("|')[^>]*http:\/\/d\.yimg\.com\/mi\/ywa\.js/ },
		'Yandex.Metrika':        { cats: { 1: 10 }, html: /<script[^>]* src=("|')[^"']+mc\.yandex\.ru\/metrika\/watch\.js("|')/ },
		'YouTube':               { cats: { 1: 14 }, html: /<(param|embed)[^>]+youtube\.com\/v/i },
		'YUI Doc':               { cats: { 1: 12 }, html: /<html[^>]* yuilibrary\.com\/rdf\/[0-9.]+\/yui\.rdf/i },
		'YUI':                   { cats: { 1:  4 }, html: /<script[^>]* src=("|')[^'"]*(\/yui\/|yui\.yahooapis\.com)[^'"]*("|')/, env: /^YAHOO$/ },
		'Zen Cart':              { cats: { 1:  6 }, html: /<meta name=("|')generator("|') [^>]+Zen Cart/i },
		'Zend':                  { cats: { 1: 18 }, headers: { 'X-Powered-By': /Zend/ } }
		};
}
