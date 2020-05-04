

var defaultThemeColors = Survey
    .StylesManager
    .ThemeColors["default"];

defaultThemeColors["$main-color"] = "#a30000";
defaultThemeColors["$main-hover-color"] = "#820000";
defaultThemeColors["$text-color"] = "#4a4a4a";
defaultThemeColors["$header-color"] = "#ffffff";
defaultThemeColors["$header-background-color"] = "#cc0000";
defaultThemeColors["$body-container-background-color"] = "#f8f8f8";
defaultThemeColors["$error-color"]="#a30000";
defaultThemeColors["$border-color"]="#cc0000";

Survey
    .StylesManager
    .applyTheme();

Survey.requiredText = "AA";


Survey.ChoicesRestfull.onBeforeSendRequest = function(sender, options) {
    options.request.setRequestHeader("Content-Type", "application/javascript");
    //options.request.setRequestHeader("Authorization", "Bearer "+jwtToken);
};

var json = {
    title: "Application Assessment",
    sendResultOnPageNext: "true",
    requiredText: "",
    showProgressBar: "bottom",
    pages: [{
        "title": "Business Drivers",
        "questions": [
            {
                "type": "radiogroup",
                "name": "BUSMOT",
                "title": "What is motivating the business to make this change?",
                "isRequired": true,
                "colCount": 1,
                "choices": ["0-UNKNOWN|Unknown","1-AMBER|Costs ", "2-GREEN|Supportability", "3-GREEN|Agility", "4-GREEN|Innovation"]
            },
            {
                "type": "radiogroup",
                "name": "BUSCRIT",
                "title": "What best describes the level of business criticality?",
                "isRequired": true,
                "colCount": 1,
                "choices": ["0-UNKNOWN|Unknown","1-AMBER|External users critical application ", "2-AMBER|Internal users critical application", "3-GREEN|External users supporting application", "4-GREEN|Internal users supporting application", "5-GREEN|PoC/Non critical application"]
            },
            {
                "type": "radiogroup",
                "name": "APPLIFE",
                "title": "What is expected application life time?",
                "isRequired": true,
                "colCount": 1,
                "choices": ["0-UNKNOWN|Unknown","1-RED|<1 year ", "2-AMBER|1 to 3 years", "3-AMBER|3 to 5 years", "4-GREEN|>5 years"]
            },
            {
                "type": "radiogroup",
                "name": "SLA",
                "title": "Does this application have SLAs?",
                "isRequired": true,
                "colCount": 1,
                "choices": ["0-UNKNOWN|Unknown","1-AMBER|Yes ", "2-GREEN|No"]
            }
        ]
    }, {
        "title": "Application Architecture",
        "questions": [
            {
                "type": "radiogroup",
                "name": "ARCHTYPE",
                "title": "Which statement best describes the application architecture?",
                "isRequired": true,
                "colCount": 1,
                "choices": ["0-UNKNOWN|Unknown","1-AMBER|Massive Monolith (high memory, high CPU) singleton deployment, vertical scale only", "2-AMBER|Massive Monolith (high memory, high CPU) , non singleton, complex to scale horizonatally", "3-AMBER|Complex Monolith -  strict runtime dependency startup order, non resilient architecture", "4-GREEN|Monotlith - no dependency, possible to scale horizontaly", "5-GREEN|Modern resilient monolith e.g. retries, circuit breaker etc", "6-GREEN|Independently deployable services"]
            },
            {
                "type": "radiogroup",
                "name": "RUNTIME",
                "title": "What runtime best describes describes the application?",
                "isRequired": true,
                "colCount": 1,
                "choices": ["0-UNKNOWN|Unknown","1-RED|Standalone Java executable", "2-GREEN|JEE Application - WebSphere", "3-AMBER|Java EE - WebLogic", "4-GREEN|Other Java EE (Tomcat, JBoos)", "5-AMBER|Non-Java"]
            },
            {
                "type": "radiogroup",
                "name": "RESILIENCY",
                "title": "How resilient is the application and how well does it recover from outages/restarts?",
                "isRequired": true,
                "colCount": 1,
                "choices": ["0-UNKNOWN|Unknown","1-RED|Application cannot be restarted cleanly and requires manual intervention", "2-RED|Application errors when southbound dependencies are unavailable and doesn't recover automatically", "3-AMBER|Application functionality limited when dependency is unavailable but recovers once dependency is available", "4-GREEN|Application employs resilient architecture patterns e.g. circuit breaker, retries etc "]
            },
            {
                "type": "radiogroup",
                "name": "CLUSTER",
                "title": "How is the application clustered?",
                "isRequired": true,
                "colCount": 1,
                "choices": ["0-UNKNOWN|Unknown","1-RED|Manually configured clustering mechanism e.g. static clusters", "2-AMBER|Application clustering mostly provided by external off-PAAS cluster manager", "3-GREEN|Application clustering mostly provided by application runtime platform using a kubernetes suitable mechanism", "5-GREEN|No application clustering required"]
            },
            {
                "type": "radiogroup",
                "name": "STATE",
                "title": "How does the application handle internal state?",
                "isRequired": true,
                "colCount": 1,
                "choices": ["0-UNKNOWN|Unknown","1-AMBER|Shared memory between applications", "2-AMBER|Managed/Coordinated externally from application e.g. external Zookeeper, data grid etc", "3-AMBER|Shared disk between application instances", "4-AMBER|HTTPS Session", "5-GREEN|Database","6-GREEN|Stateless"]
            },
            {
                "type": "radiogroup",
                "name": "SESSIONPERS",
                "title": "Is session persistence configured?",
                "isRequired": true,
                "colCount": 1,
                "choices": ["0-UNKNOWN|Unknown","1-GREEN|No", "2-AMBER|Yes - Memory to memory replication", "3-AMBER|Yes - external cache e.g. WebSphere Extreme Scale", "5-GREEN|Yes- Database"]
            },
            {
                "type": "radiogroup",
                "name": "WORKMAN",
                "title": "Are work managers or scheduler used?",
                "isRequired": true,
                "colCount": 1,
                "choices": ["0-UNKNOWN|Unknown","1-GREEN|No", "2-RED|Yes"]
            },
            {
                "type": "radiogroup",
                "name": "CONFIG",
                "title": "How is the application configured?",
                "isRequired": true,
                "colCount": 1,
                "choices": ["0-UNKNOWN|Unknown","1-RED|Configuration compiled/patched into the application at installation time, application configured via user interface", "2-AMBER|Multiple configuration files in multiple filesystem locations", "3-GREEN|Configuration loaded by application from environment variables or  container mounted files"]
            },
            {
                "type": "radiogroup",
                "name": "STATICCONTENT",
                "title": "How the static content used by application is serverd?",
                "isRequired": true,
                "colCount": 1,
                "choices": ["0-UNKNOWN|Unknown","1-GREEN|No static content", "2-GREEN|Static content served by application", "3-AMBER|Static content separately deployed and served by web server"]
            }
        ]
    },
        {
            "title": "Application Development",
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "DEVOWNER",
                    "title": "Does the application development team understand and actively develop the application?",
                    "isRequired": true,
                    "colCount": 1,
                    "choices": ["0-UNKNOWN|Unknown","1-RED|External 3rd party or COTS application ", "2-RED|In maintenance mode, no app SME knowledge, poor documentation", "3-AMBER|Maintenance mode, SME knowledge available", "4-GREEN|Actively developed, SME knowledge available", "5-GREEN|New application"]
                },
                {
                    "type": "radiogroup",
                    "name": "DEPLOYFREQ",
                    "title": "Deployment frequency",
                    "comment": "How often is the application deployed to production?",
                    "isRequired": true,
                    "colCount": 1,
                    "choices": ["0-UNKNOWN|Unknown","1-RED|Greater than once every six months", "2-AMBER|Between once per month and once every six months", "3-GREEN|Often than once per month"]
                },
                {
                    "type": "radiogroup",
                    "name": "DEPLOY",
                    "title": "How is the application currently deployed?",
                    "isRequired": true,
                    "colCount": 1,
                    "choices": ["0-UNKNOWN|Unknown","1-RED|Manual documented steps, user interface driven interaction", "2-RED|Manual documented steps, some basic automation", "3-AMBER|Automated deployment, but manual, complex, promotion through stages", "4-GREEN|Full CD Pipeline in place, promoting Applications through the stages"]
                },
                {
                    "type": "radiogroup",
                    "name": "DEPLOYAUTO",
                    "title": "Does any build/deployment automation exist? if so please describe the tools used?",
                    "isRequired": true,
                    "colCount": 1,
                    "choices": ["0-UNKNOWN|Unknown","1-RED|No automation", "2-RED|Custom scripts, homegrew deployment frameworks", "3-AMBER|Product related scriping, e.g. wsadmin", "4-GREEN|Open source tools - e.g. Maven, Jenkins, Bamboo", "5-AMBER|Comercial tools - e.g. UrbanCode Deploy" ]
                },
                {
                    "type": "radiogroup",
                    "name": "TEST",
                    "title": "What kind of testing does the application undergo?",
                    "isRequired": true,
                    "colCount": 1,
                    "choices": ["0-UNKNOWN|Unknown","1-RED|None, minimal manual testing only", "2-RED| Minimal automated testing (unit tests), manual functional testing", "3-AMBER|Automated unit & regression testing, basic CI pipelines", "4-GREEN|Highly repeatable automated testing - Unit, Integration, smoke tests before production deployment, modern test practices followed"]
                },
                {
                    "type": "radiogroup",
                    "name": "BUILD",
                    "title": "How is the application compiled today?",
                    "isRequired": true,
                    "colCount": 1,
                    "choices": ["0-UNKNOWN|Unknown","1-RED|Manual compilation in the dev tool (Eclipse, RAD, IntelliJ)", "2-AMBER|Ant scripts", "3-GREEN|Automated unit & regression testing, basic CI pipelines", "4-GREEN|Maven, Gradle"]
                }
            ]
        }, {
            "title": "Operations",
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "OPSOWNER",
                    "title": "How is the application supported in Production?",
                    "isRequired": true,
                    "colCount": 1,
                    "choices": ["0-UNKNOWN|Unknown","1-RED|Application production support outsourced to 3rd party support provider. No inhouse support.", "2-RED|Production support provided by separate internal team, little interaction with development team.", "3-GREEN|SRE based approach with knowledgeable and experienced operations team", "5-GREEN|Pure DevOps model, the team that builds it is responsible for running it in Production"]
                },
                {
                    "type": "radiogroup",
                    "name": "LOGS",
                    "title": "Does the application use logging?",
                    "isRequired": true,
                    "colCount": 1,
                    "choices": ["0-UNKNOWN|Unknown","1-GREEN|Log entries written to filesystem", "2-AMBER|Logs exposed via syslog", "3-RED|Custom logging framework e.g. logging to database", "4-GREEN|Configurable logging e.g. can be sent to STDOUT"]
                },
                {
                    "type": "radiogroup",
                    "name": "METRICS",
                    "title": "Does the application provide metrics?",
                    "isRequired": true,
                    "colCount": 1,
                    "choices": ["0-UNKNOWN|Unknown","1-AMBER|No metrics exposed", "2-AMBER|Internal metrics but not exposed", "3-AMBER|Metrics exposed via binary protocols e.g. SNMP", "4-GREEN|3rd party metrics solution e.g. Dynatrace, AppDynamics etc", "5-GREEN|Prometheus support, native kubernetes metrics, integration with autoscalers"]
                },
                {
                    "type": "radiogroup",
                    "name": "HEALTH",
                    "title": "How easy is it to determine the application health and if it's ready to handle traffic?",
                    "isRequired": true,
                    "colCount": 1,
                    "choices": ["0-UNKNOWN|Unknown","1-RED|No health or readyiness query functionality available", "2-RED|Custom watchdog process monitoring and managing the application", "3-AMBER|Basic application health requires semi-complex scripting", "4-GREEN|Scriptable liveness and readyiness probes", "5-GREEN|Probes execute synthetic transactions to verify application health"]
                },
                {
                    "type": "radiogroup",
                    "name": "CONTAINERS",
                    "title": "What level of skills do your people have in containers?",
                    "isRequired": true,
                    "colCount": 1,
                    "choices": ["0-UNKNOWN|Unknown","1-RED|No containers skills", "2-RED|Experimenting with containers on desktop to support running application on a laptop. No maintanace, management skills", "3-AMBER|Single containers deployed and manintained in production.", "4-GREEN| Proficient with containers and container orchestration"]
                }
            ]
        }, {
            "title": "Security",
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "COMPLIANCE",
                    "title": "Does the application have any legal compliance requirements? e.g. PCI, HIPPA etc. Does the application have any licensing requirements? e.g. per core licensing",
                    "isRequired": true,
                    "colCount": 1,
                    "choices": ["0-UNKNOWN|Unknown","1-RED|High compliance requirements - both Legal and licensing", "2-RED|Licensing compliance - licensing servers", "3-AMBER|Legal compliance - distinct hardware, isolated clusters, compliance certification","4-GREEN| None"]
                },
                {
                    "type": "radiogroup",
                    "name": "USERAUTH",
                    "title": "How application is handling user authentication?",
                    "isRequired": true,
                    "colCount": 1,
                    "choices": ["0-UNKNOWN|Unknown","1-GREEN|No authentication required (public access)", "2-AMBER|Standard application login integrated with LDAP", "3-GREEN|Single Sign On using well known protocols (OAuth. OICD)", "4-RED|Single Sign On using Kerberos/SPNEGO", "5-RED|Custom solution using proprietary APIs e.g. TAI"]
                },
                {
                    "type": "radiogroup",
                    "name": "AUTHPROXY",
                    "title": "Is any authentication/authorization proxy being used?",
                    "isRequired": true,
                    "colCount": 1,
                    "choices": ["0-UNKNOWN|Unknown","1-GREEN|No", "2-RED|Yes - SiteMinder", "3-YES|WebSEAL (IBM Security Access Manager)", "4-RED|Custom 3rd party"]
                },
                {
                    "type": "radiogroup",
                    "name": "SECURITY",
                    "title": "How does the application acquire security credentials/certificates?",
                    "isRequired": true,
                    "colCount": 1,
                    "choices": ["0-UNKNOWN|Unknown","1-RED|HSM, hardware based encryption devices", "2-RED|Certs, Keys bound to application IP addresses, generated at runtime per application instance", "3-AMBER|Keys/Certs compiled into application", "4-GREEN|Certificates/Keys loaded via shared disk", "5-GREEN|Certificates/Keys loaded via files or vault integration","6-GREEN|None needed"]
                },
                {
                    "type": "comment",
                    "name": "NOTES",
                    "title": "Additional notes or comments"
                }
            ]
        }],
    completedHtml: "<p><h4>Thank you for completing the Pathfinder Assessment.  Please click <a id='surveyCompleteLink' href='/assessments.jsp?customerId={CUSTID}'>Here</a> to return to the main page."
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        var xmlhttp = new XMLHttpRequest();
        tmpResult = result.data;
        var custID = Utils.getParameterByName("customerId");
        var appID  = Utils.getParameterByName("applicationId");

        //dependencies array needs special handling
        var tmpDEPSOUTLIST = tmpResult.DEPSOUTLIST;
        var tmpDEPSINLIST = tmpResult.DEPSINLIST;
        delete tmpResult.DEPSOUTLIST;
        delete tmpResult.DEPSINLIST;
        xmlhttp.open("POST", addAuthToken(Utils.SERVER+"/api/pathfinder/customers/"+custID+"/applications/"+appID+"/assessments"));
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        myObj = { "payload": tmpResult,"depsOUT":tmpDEPSOUTLIST, "depsIN":tmpDEPSINLIST,"datetime":new Date()};
        var payload=JSON.stringify(myObj);
        console.log("payload="+payload);
        xmlhttp.send(payload);

        if (undefined!=$('#surveyCompleteLink')){
            $('#surveyCompleteLink').attr('href', '/assessments.jsp?customerId='+Utils.getParameterByName("customerId"));
        }
    });


survey
    .onAfterRenderPage
    .add(function (result) {
        console.log("result="+JSON.stringify(survey.data));

        // this adds the question weighting to the css class so we can add a visual clue to where the thresholds are
        $('input', $(".iradio_square-blue")).each(function(){
            var valueSplit=this.value.split('-');
            if (valueSplit.length>1){
                var color=valueSplit[1];
                $(this).parent().addClass("radio-weighting");
                $(this).parent().addClass("radio-weighting-"+color.toLowerCase());
                //console.log("Adding question weighting to: "+$(this).name);
            }
        });

        var custID = Utils.getParameterByName("customerId");
        var appID  = Utils.getParameterByName("applicationId");

        if (survey.currentPageNo === 1){

            result.data.CUSTID=result.data.CUSTNAME;
            var d1 = survey.getQuestionByName('DEPSOUTLIST');
            d1.choicesByUrl.url = addAuthToken(Utils.SERVER+"/api/pathfinder/customers/"+custID+"/applications/?exclude="+appID);
            d1.choicesByUrl.valueName = "Id";
            d1.choicesByUrl.titleName = "Name";
            d1.choicesByUrl.run();

            var d2 = survey.getQuestionByName('DEPSINLIST');
            d2.choicesByUrl.url = addAuthToken(Utils.SERVER+"/api/pathfinder/customers/"+custID+"/applications/?exclude="+appID);
            d2.choicesByUrl.valueName = "Id";
            d2.choicesByUrl.titleName = "Name";
            d2.choicesByUrl.run();

        }
    });

if (null!=results){
    survey.data=results;

    //Force the user to answer the dependencies question in the case of re-editing the survey
    var d11 = survey.getQuestionByName('DEPSIN');
    d11.value="";
    var d21 = survey.getQuestionByName('DEPSOUT');
    d21.value="";
}

$("#surveyElement").Survey({
    model: survey
});

