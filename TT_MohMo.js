/*
* T.T. Hunter,
* -- hunts a TLS appointment.
* @version: 1.7
* @author:
* https://www.termin-tracker-all.com
*/



const centerInfo= {
  'TlsGermanyRabat_FamilyVisit': {
    'code': 'maRBA2de',
    'country': 'de',
    'aptType': 'court_sejour',
    'issueCountry': 'ma'
  },
  'TlsGermanyRabat_Tourism': {
    'code': 'maRBA2de',
    'country': 'de',
    'aptType': 'tourism',
    'issueCountry': 'ma'
  },
  'TlsFranceFes_Case1': {
    'code': 'maFEZ2fr',
    'country': 'fr',
    'aptType': 'Primo',
    'issueCountry': 'ma'
  },
  'TlsFranceFes_Case2': {
    'code': 'maFEZ2fr',
    'country': 'fr',
    'aptType': 'Renouvellement',
    'issueCountry': 'ma'
  },
  'TlsFranceOujda_Case1': {
    'code': 'maOUD2fr',
    'country': 'fr',
    'aptType': 'Primo',
    'issueCountry': 'ma'
  },
  'TlsFranceOujda_Case2': {
    'code': 'maOUD2fr',
    'country': 'fr',
    'aptType': 'Renouvellement',
    'issueCountry': 'ma'
  },
  'TlsFranceCasablanca_Case1': {
    'code': 'maCAS2fr',
    'country': 'fr',
    'aptType': 'Grand%20Public%20PRIMO',
    'issueCountry': 'ma'
  },
  'TlsFranceCasablanca_Case2': {
    'code': 'maCAS2fr',
    'country': 'fr',
    'aptType': 'Grand%20Public%20VISE',
    'issueCountry': 'ma'
  },
  'TlsFranceCasablanca_Case3': {
    'code': 'maCAS2fr',
    'country': 'fr',
    'aptType': 'Grand%20Public%20CIRCULATION',
    'issueCountry': 'ma'
  },
  'TlsFranceTanger_Case1': {
    'code': 'maTNG2fr',
    'country': 'fr',
    'aptType': 'PRIMO',
    'issueCountry': 'ma'
  },
  'TlsFranceAgadir_Case1': {
    'code': 'maAGA2fr',
    'country': 'fr',
    'aptType': 'Grand%20Public%20PRIMO',
    'issueCountry': 'ma'
  },
  'TlsFranceMarrakech_Case1': {
    'code': 'maRAK2fr',
    'country': 'fr',
    'aptType': 'Grand%20Public%20PRIMO',
    'issueCountry': 'ma'
  },
  'TlsFranceMarrakech_Case2': {
    'code': 'maRAK2fr',
    'country': 'fr',
    'aptType': 'Grand%20Public%20VISE',
    'issueCountry': 'ma'
  },
  'TlsFranceRabat_Case1': {
    'code': 'maRBA2fr',
    'country': 'fr',
    'aptType': 'Primo',
    'issueCountry': 'ma'
  },
  'TlsFranceRabat_Case2': {
    'code': 'maRBA2fr',
    'country': 'fr',
    'aptType': 'Renouvellement',
    'issueCountry': 'ma'
  },
  'TlsFranceAnnaba_Case1': {
    'code': 'dzAAE2fr',
    'country': 'fr',
    'aptType': 'premiere_demande',
    'issueCountry': 'dz'
  },
  'TlsFranceAnnaba_Case2': {
    'code': 'dzAAE2fr',
    'country': 'fr',
    'aptType': 'Frequent',
    'issueCountry': 'dz'
  },
  'TlsFranceAnnaba_Case3': {
    'code': 'dzAAE2fr',
    'country': 'fr',
    'aptType': 'Circulation',
    'issueCountry': 'dz'
  },
};

let inj_html = `
    <div id="textHunterTitle">TerminTracker| Hunter <span style="font-size: 14px;">v1.7</span></div>
    <div id="ttHunterDiv">
    <form id="ttHunterForm">
        <select id="itemHunterList" name="centHunterList">
            <option value="TlsFranceCasablanca_Case1">TLS France à Casablanca (cas 1)/MA</option>
            <option value="TlsFranceCasablanca_Case2">TLS France à Casablanca (cas 2)/MA</option>
            <option value="TlsFranceCasablanca_Case3">TLS France à Casablanca (cas 3)/MA</option>
            <option value="TlsFranceRabat_Case1">TLS France à Rabat (cas 1)/MA</option>
            <option value="TlsFranceRabat_Case2">TLS France à Rabat (cas 2)/MA</option>
            <option value="TlsFranceFes_Case1">TLS France à Fès (cas 1)/MA</option>
            <option value="TlsFranceFes_Case2">TLS France à Fès (cas 2)/MA</option>
            <option value="TlsFranceOujda_Case1">TLS France à Oujda (cas 1)/MA</option>
            <option value="TlsFranceOujda_Case2">TLS France à Oujda (cas 2)/MA</option>
            <option value="TlsFranceTanger_Case1">TLS France à Tanger (cas 1)/MA</option>
            <option value="TlsFranceAgadir_Case1">TLS France à Agadir (cas 1)/MA</option>
            <option value="TlsFranceMarrakech_Case1">TLS France à Marrakech (cas 1)/MA</option>
            <option value="TlsFranceMarrakech_Case2">TLS France à Marrakech (cas 2)/MA</option>
            <option value="TlsGermanyRabat_Tourism">TLS Allemagne (tourisme) à Rabat/MA</option>
            <option value="TlsGermanyRabat_FamilyVisit">TLS Allemagne (visite familiale) à Rabat/MA</option>
            <option value="TlsFranceAnnaba_Case1">TLS France à Annaba (1ère demande)/DZ</option>
            <option value="TlsFranceAnnaba_Case2">TLS France à Annaba (renouvellement ordinaire)/DZ</option>
            <option value="TlsFranceAnnaba_Case3">TLS France à Annaba (renouvellement circulation)/DZ</option>
        </select>
        <br>
        <button id="selectHunterButton">Prendre un Rendez-Vous</button>
        <br><br>
        <label for="refreshHunterTime">Chercher chaque (secondes) :</label>
        <input type="number" id="refreshHunterTime" name="refreshHunterTime" value="300" required>
        <br><br>
        <div id="textHunterContainer">
            <div id="statusT">Statut : </div>
            <div id="messageZone">Prêt.</div>
        </div>
    </form>
    </div>
    <br>
    <div id="linkHunter"><a href="https://www.termin-tracker-all.com" target="_blank">www.termin-tracker-all.com</a></div>
`;

let inj_css = `
    #messageZone {
        text-align: center;
        font-weight: bold;
        font-size: 16px;
        color: #336699;
        display: inline-block;
    }

    #statusT {
        text-align: center;
        font-weight: bold;
        font-size: 16px;
        color: #336699;
        display: inline-block;
    }

    label {
        font-size: 16px;
        color: #000000;
    }

    #textHunterContainer {
        text-align: center;
    }

    #textHunterTitle {
        color: #336699;
        margin-top: 10px;
        font-size: 22px;
        text-align: center;
        font-weight: bold;
    }

    #linkHunter {
        color: #007bff;
        text-decoration: none;
        transition: color 0.3s ease;
        font-size: 13px;
        text-align: center;
    }
    
    #linkHunter:hover {
        color: #0056b3;
        text-decoration: underline;
        font-size: 13px;
        text-align: center;
    }

    button {
        background-color: #336699;
        color: #fff;
        padding: 10px 20px;
        font-size: 16px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover {
        background-color: #214c7d;
    }

    select {
        padding: 10px;
        font-size: 16px;
        border: none;
        background-color: #fff;
        border-radius: 5px;
        margin: 5px;
    }

    #ttHunterDiv {
        text-align: center;
    }
`;


var timer_interval_id = undefined;
var is_booking_successful = false;


function alive_checker() {
    console.log('T.T. Hunter alive.');
}

async function keep_session_alive() {
    console.log('T.T. Hunter periodic check.');
	
	if (!is_booking_successful) {
		var selectedSessionCenter = localStorage.getItem('selectedCenter');
		if (selectedSessionCenter) {
			await runExtension(true);
		}
	}
}


let hunter_form = document.getElementById("ttHunterForm");
if (hunter_form) {
    console.log('T.T. Hunter already running.');
} else {
    let new_div = document.createElement('div');
    new_div.innerHTML = inj_html;
    document.body.prepend(new_div);

    let styleElement = document.createElement('style');
    styleElement.innerHTML = inj_css;
    document.head.prepend(styleElement);

    setInterval(alive_checker, 5000);
    timer_interval_id = setInterval(keep_session_alive, 60*5*1000);

    handleGUI();
}


function handleGUI() {
    var itemList = document.getElementById('itemHunterList');
    var selectedCenter = localStorage.getItem('selectedCenter');
    if (selectedCenter) {
        if (itemList) {
            itemList.value = selectedCenter;
        }
    }
    let button_elt = document.getElementById('selectHunterButton');
    if (button_elt) {
        button_elt.addEventListener('click', async function (event) {
            // prevent page reload
            event.preventDefault();
    
            // main action
            console.log('T.T. Hunter started operations..');
            localStorage.setItem('selectedCenter', itemList.value);
            await runExtension(true);
        });
    }

    let refresh_elt = document.getElementById('refreshHunterTime');
    if (refresh_elt) {
        refresh_elt.addEventListener('change', function() {
            let refresh_time_s = Number(refresh_elt.value);
            console.log('New refresh time (s): ', refresh_time_s);
            clearInterval(timer_interval_id);
            timer_interval_id = setInterval(keep_session_alive, refresh_time_s*1000);
        });
    }
}

function padNumber(number) {
  return number < 10 ? '0' + number : number;
}

function getTimestamp() {
    let currentDate = new Date();
    
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
    
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    
    let formattedDateTime = `${year}/${padNumber(month)}/${padNumber(day)} ${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
    return formattedDateTime;
}

// main entry point.
async function runExtension(do_post) {
    const startTimestamp = performance.now();
    set_warning('En cours..');

    let tabUrl = window.location.href;
    let groupId = extractIdFromUrl(tabUrl);
    let goodUrl = isMatchingUrl(tabUrl);
    if (!goodUrl) {
        set_warning('Allez à la page des rendez-vous.');
    } else {
        let xsrfToken = getCookie('XSRF-TOKEN');
        let captchaId = getCaptchaId();
        selectedCenter = localStorage.getItem('selectedCenter');

        let aptType = centerInfo[selectedCenter]['aptType']
        let countryCode = centerInfo[selectedCenter]['country']
        let centerCode = centerInfo[selectedCenter]['code']
        let issueCntry = centerInfo[selectedCenter]['issueCountry']
        let apiGETUrl = 'https://visas-' + countryCode + '.tlscontact.com/services/customerservice/api/tls/appointment/' + issueCntry +'/' + centerCode + '/table?client=' + countryCode + '&formGroupId=' + groupId + '&appointmentType=' + aptType + '&appointmentStage=appointment'

        var theGetResponse = await executeGET(apiGETUrl);

		if (theGetResponse) {
	        if (theGetResponse.status === 200) {
	            var calendarTable = await theGetResponse.json();
	            console.log("calendarTable = ", calendarTable);
	            let validSlotsArr = getTheValidSlots(calendarTable);
	            let nbValidApts = validSlotsArr.length;
	
	            console.log("nbValidApts = ", nbValidApts);
	            if (do_post) {
	                if (nbValidApts > 0) {
	                    let chosenAptIdx = Math.floor(Math.random() * nbValidApts);
	                    let chosenDate = validSlotsArr[chosenAptIdx].date;
	                    let chosenTime = validSlotsArr[chosenAptIdx].time;
	                    console.log("trying to book slot : " + chosenDate + ' @ ' + chosenTime);
	    
	                    // start the booking request
	    
	                    let recaptchaToken = '';
	                    await grecaptcha.execute(captchaId, {action: 'book'}).then(function(token) {
	                                recaptchaToken = token;
	                            });
	    
	                    let apiPOSTUrl = 'https://visas-' + countryCode + '.tlscontact.com/services/customerservice/api/tls/appointment/book?client=' + countryCode + '&issuer=' + centerCode +'&formGroupId=' + groupId + '&timeslot=' + chosenDate + '%20' + chosenTime + '&appointmentType=' + aptType +'&lang=fr-fr';
	                    let apiPOSTHeaders = {
	                        "accept": "application/json, text/plain, */*",
	                        "accept-language": "en-US,en;q=0.9",
	                        "content-type": "application/x-www-form-urlencoded",
	                        "recaptcha-token": recaptchaToken,
	                        "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
	                        "sec-ch-ua-mobile": "?0",
	                        "sec-ch-ua-platform": "\"Windows\"",
	                        "sec-fetch-dest": "empty",
	                        "sec-fetch-mode": "cors",
	                        "sec-fetch-site": "same-origin",
	                        "x-xsrf-token": xsrfToken
	                    };
	                    let apiPOSTReferrer = 'https://visas-' + countryCode + '.tlscontact.com/appointment/' + issueCntry +'/' + centerCode + '/' + groupId;
	    
	                    let postResponse = await executePOST(apiPOSTUrl, apiPOSTHeaders, apiPOSTReferrer);
	    
	                    if (postResponse) {
	                        if (postResponse.status === "success") {
								is_booking_successful = true;
	                            const endTimestamp = performance.now();
	                            const elapsedTime = (endTimestamp - startTimestamp)/1000.0;
	                            console.log('POST request is successful !');
	                            set_positive('Créneau [' + chosenDate + ' @ ' + chosenTime + '] Réservé avec Succès. En: ' + elapsedTime.toFixed(2) + 's.' + ' | @ ' + getTimestamp());
	                        } else {
                                let errMsg = postResponse.status;
	                            errMsg = errMsg.toString();
	                            console.log('Erreur durant la requête POST. Message du TLS: ' + errMsg);
	                            set_error('Erreur durant la requête. Message du TLS: ' + errMsg + ' | @ ' + getTimestamp());
	                        }
	                    } else {
	                        console.log('Erreur durant la requête POST');
	                        set_error('Erreur durant la requête.' + ' | @ ' + getTimestamp());
	                    }
	                } else {
	                    const endTimestamp = performance.now();
	                    const elapsedTime = (endTimestamp - startTimestamp)/1000.0;
	                    set_info('Pas de rendez-vous disponible. En: ' + elapsedTime.toFixed(2) + 's | @ ' + getTimestamp());
	                }
	            } else {
	                const endTimestamp = performance.now();
	                const elapsedTime = (endTimestamp - startTimestamp)/1000.0;
	                set_info(nbValidApts.toString() + ' rendez-vous disponible(s). En: ' + elapsedTime.toFixed(2) + 's | @ ' + getTimestamp());
	            }
	        } else {
	            let errMsg = '';
	            if (theGetResponse.status === 400) {
	                errMsg = 'Bad Request [400]';
	            } else if (theGetResponse.status === 401) {
	                errMsg = 'Unauthorized [401]';
	            } else if (theGetResponse.status === 403) {
	                errMsg = 'Forbidden [403]';
	            } else if (theGetResponse.status === 404) {
	                errMsg = 'Not Found [404]';
	            } else {
	                errMsg = theGetResponse.status;
	            }
	            errMsg = errMsg.toString();
	            console.log('Erreur durant la requête GET. Message du TLS: ' + errMsg);
	            set_error('Erreur durant la requête. Message du TLS: ' + errMsg + ' | @ ' + getTimestamp());
	        }
		} else {
			console.log('Erreur durant la requête GET');
			set_error('Erreur durant la requête.' + ' | @ ' + getTimestamp());
		}
    }
    console.log('T.T. Hunter finished.');
}

function set_warning(i_message) {
    let messageZone = document.getElementById("messageZone");
    messageZone.innerHTML = i_message;
    messageZone.style.color = '#eb9e34';
}

function set_error(i_message) {
    let messageZone = document.getElementById("messageZone");
    messageZone.innerHTML = i_message;
    messageZone.style.color = '#d1112e';
}

function set_positive(i_message) {
    let messageZone = document.getElementById("messageZone");
    messageZone.innerHTML = i_message;
    messageZone.style.color = '#0b8f4d';
}

function set_info(i_message) {
    let messageZone = document.getElementById("messageZone");
    messageZone.innerHTML = i_message;
    messageZone.style.color = '#336699';
}

function isMatchingUrl(url) {
  const regex = /^https:\/\/visas-[a-zA-Z]{2}\.tlscontact\.com\/appointment\/[a-zA-Z]{2}\/[a-zA-Z0-9]+\/\d+$/;
  return regex.test(url);
}

function extractIdFromUrl(url) {
    let regex = /\/(\d+)$/;
    let match = url.match(regex);

    if (match && match[1]) {
        return match[1];
    } else {
        return null;
    }
}

function getCookie(name) {
    return document.cookie.split('; ').find(cookie => cookie.startsWith(name + '='))?.split('=')[1] || null;
}

function getCaptchaId() {
    let captchaElts = document.getElementsByClassName('grecaptcha-logo')
    if (captchaElts.length > 0) {
        let urlCaptcha = captchaElts[0].getElementsByTagName('iframe')[0].src;
        let urlParams = new URLSearchParams(urlCaptcha);
        let captchaId = urlParams.get('k');
        return captchaId;
    }
    return '';
}

async function executeGET(getURL) {
    return new Promise((resolve) => {
        fetch(getURL)
          .then(response => response)
          .then(data => {
             resolve(data);
          })
          .catch(error => {
             console.log("Error making GET request:", error);
             resolve(undefined);
        });
    });
}


async function executePOST(postURL, postHeaders, postReferrer) {
    return new Promise((resolve) => {
        fetch(postURL,
            {
                "headers": postHeaders,
                "referrer": postReferrer,
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": null,
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            })
          .then(response => response.json())
          .then(data => {
             resolve(data);
          })
          .catch(error => {
             console.log("Error making POST request:", error);
             resolve(undefined);
        });
    });
}

function getTheValidSlots(inJsonData) {
  let validSlots = [];

  Object.keys(inJsonData).forEach(date => {
    Object.keys(inJsonData[date]).forEach(time => {
      if (inJsonData[date][time] === 1) {
        validSlots.push({
          date: date,
          time: time
        });
      }
    });
  });

  return validSlots;
}
