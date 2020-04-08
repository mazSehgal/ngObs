
<!DOCTYPE html>

<html>

	<head>
	
		<meta charset="UTF-8">
		<meta name="format-detection" content="telephone=no" />
		
		<script type="text/javascript" src="cordova.js"></script>
		
		<title>HCR</title>
		<link rel="shortcut icon" type="image/png" href="resources/icons/icon-40@2x.png"/>
		<link rel="stylesheet" type="text/css" href="css/main.css" />
		<link rel="stylesheet" type="text/css" href="css/icons.css" />
		<link rel="stylesheet" type="text/css" href="css/colours.css" />
		
		<link rel="preload" href="resources/splash.png" as="image" />
		
		<script>

			$$APP = ["hcr-dev", "3.4"];
			$$EPRO = ["epro-web/epro", "--user--"];
			
			(function () {
				//Redirect to correct DNS entry if incorrect
				if (typeof cordova !== "undefined") return;
				var hostname = location.hostname.split('.');
				if (hostname[0] !== $$APP[0]) {
					hostname[0] = $$APP[0]
					location.href = "https://"+hostname.join(".");
				};
			}());
			
			document.domain = "hilldomain.thh.nhs.uk";
			
			/* IE patches */
			if(!NodeList.prototype.forEach) NodeList.prototype.forEach = Array.prototype.forEach;
			if(!String.prototype.repeat) String.prototype.repeat = function ($n) { return Array($n+1).join(this); }
			if(!Object.assign) Object.assign = function ($target, $source) { for(var v in $source) { $target[v] = $source[v]; } return $target; };
			/* IE patches */
			
			function onLoad () {
				$.nav.page.sign_in();
				document.body.style.opacity = "1";
			}
		</script>
		
	</head>
	
	<body onload="onLoad();" >

		<audio id="beep"><source src="resources/beep.mp3" type="audio/mpeg"></audio>
	
		<div style="height:0; width:0; overflow:hidden;">
			<input type="text" name="SSOUsername" />
			<input type="password" name="SSOPassword" />
		</div>
		
		<header></header>
		<main></main>

		<script type="text/javascript" src="js/form_elements/canvas.js"></script>
		<script type="text/javascript" src="ext_js/moment.js"></script>
		<script type="text/javascript" src="ext_js/chart.js"></script>
		
		<script type="text/javascript" src="js/form_elements/canvas.js"></script>
		<script type="text/javascript" src="js/ngX.js"></script>
		
		<script type="text/javascript" src="js/forms.js"></script>
		<script type="text/javascript" src="js/form_elements/chartjs_ngExtended.js"></script>
		<script type="text/javascript" src="js/form_elements/input_checkbox.js"></script>
		<script type="text/javascript" src="js/form_elements/input_radio.js"></script>
		<script type="text/javascript" src="js/form_elements/select.js"></script>
		<script type="text/javascript" src="js/form_elements/select_double.js"></script>
		<script type="text/javascript" src="js/form_elements/textarea.js"></script>
		<script type="text/javascript" src="js/form_elements/input_text.js"></script>
		<script type="text/javascript" src="js/form_elements/input_time.js"></script>
		<script type="text/javascript" src="js/form_elements/button.js"></script>
		<script type="text/javascript" src="js/form_elements/input_date.js"></script>
		<script type="text/javascript" src="js/form_elements/OPCS4.js"></script>
		<script type="text/javascript" src="js/form_elements/OPCS4_ref.js"></script>
		<script type="text/javascript" src="js/form_elements/preferences.js"></script>
		
		<script type="text/javascript" src="js/form_elements/surgical_clinicians.js"></script>
		
		
		<script type="text/javascript" src="js/webcomponent_table.js"></script>
		<script type="text/javascript" src="js/webcomponent_table2.js"></script>	
		<script type="text/javascript" src="js/database.js"></script>
		<script type="text/javascript" src="js/navigation.js"></script>
		<script type="text/javascript" src="js/patient_banner.js"></script>
		<script type="text/javascript" src="js/pin_lock.js"></script>
		
		<script type="text/javascript" src="pages/sign_in.js"></script>
		<script type="text/javascript" src="pages/menu.js"></script>
		<script type="text/javascript" src="pages/users.js"></script>
		<script type="text/javascript" src="pages/mailbox.js"></script>
		<script type="text/javascript" src="pages/mailbox_message.js"></script>
		<script type="text/javascript" src="pages/patient_activity.js"></script>
		<script type="text/javascript" src="pages/patient_search.js"></script>
		<script type="text/javascript" src="pages/search_results.js"></script>
		<script type="text/javascript" src="pages/clinician_specific_list.js"></script>
		<script type="text/javascript" src="pages/form_list.js"></script>
		<script type="text/javascript" src="pages/file_upload.js"></script>
		<script type="text/javascript" src="pages/form.js"></script>
		<script type="text/javascript" src="pages/document_list.js"></script>
		<script type="text/javascript" src="pages/versions.js"></script>
		<script type="text/javascript" src="pages/preferences.js"></script>
		<script type="text/javascript" src="pages/refer_list.js"></script>
		<script type="text/javascript" src="pages/refer.js"></script>
		<script type="text/javascript" src="pages/settings.js"></script>
		<script type="text/javascript" src="pages/diagnostics.js"></script>
		<script type="text/javascript" src="pages/pathology.js"></script>
		<script type="text/javascript" src="pages/pathology_chart.js"></script>
		<script type="text/javascript" src="pages/radiology.js"></script>
		<script type="text/javascript" src="pages/observations.js"></script>
		
		<script type="text/javascript" src="pages/patient_notes.js"></script>
		
	</body>
	
</html>
