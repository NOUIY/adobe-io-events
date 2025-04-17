"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8128],{37669:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return c}});var a=n(87462),i=n(63366),o=(n(15007),n(64983)),r=n(91515),s=n(16789),d=["components"],l={},p={_frontmatter:l},m=r.Z;function c(e){var t=e.components,n=(0,i.Z)(e,d);return(0,o.mdx)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"adobe-io-events-frequently-asked-questions-faq"},"Adobe I/O Events Frequently Asked Questions (FAQ)"),(0,o.mdx)("h2",{id:"general-questions"},"General questions"),(0,o.mdx)("h3",{id:"which-events-are-currently-supported-by-adobe-io-events"},"Which events are currently supported by ",(0,o.mdx)("inlineCode",{parentName:"h3"},"Adobe I/O Events"),"?"),(0,o.mdx)("p",null,"We are adding new events providers regularly, at the time of writing, the following Adobe solutions are supported via I/O Events:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("a",{parentName:"p",href:"https://www.adobe.com/go/devs_events_cc_docs"},"Creative Cloud Assets")," (deprecated)")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Creative Cloud Libraries (replacing the above)")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Imaging API")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Adobe XD")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Adobe Document Cloud")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("a",{parentName:"p",href:"https://www.adobe.com/go/devs_events_aep_docs"},"Platform notifications"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("a",{parentName:"p",href:"https://www.adobe.com/go/devs_events_triggers_docs"},"Analytics Triggers"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("a",{parentName:"p",href:"../guides/using/marketo/marketo-data-streams.md"},"Marketo Data Streams"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("a",{parentName:"p",href:"https://www.adobe.com/go/devs_events_privacy_docs"},"Privacy Service"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("a",{parentName:"p",href:"https://www.adobe.com/go/devs_events_cloudmanager_docs"},"Cloud Manager"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Asset Compute")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("a",{parentName:"p",href:"../guides/using/aem/index.md"},"AEM"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Adobe Campaign Standard"))),(0,o.mdx)("p",null,"You can also register ",(0,o.mdx)("a",{parentName:"p",href:"../guides/using/custom_events.md"},"your own ",(0,o.mdx)("inlineCode",{parentName:"a"},"Custom Events Provider"))),(0,o.mdx)("h3",{id:"what-is-the-guarantee-of-events-delivery"},"What is the guarantee of events delivery?"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"Adobe I/O Events")," provides durable delivery. ",(0,o.mdx)("strong",{parentName:"p"},"It delivers each event at least once for each registration"),".\nIf the webhook endpoint doesn't acknowledge receipt of an event, ",(0,o.mdx)("inlineCode",{parentName:"p"},"Adobe I/O Events")," retries the delivery of the event (see the ",(0,o.mdx)("a",{parentName:"p",href:"#webhook-faq"},"webhook FAQ")," section below)."),(0,o.mdx)("p",null,"Note that ",(0,o.mdx)("inlineCode",{parentName:"p"},"Adobe I/O Events"),":"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Currently doesn't guarantee the order of events delivery, so subscribers may receive them out of order (this applies to our Journaling API as well)."),(0,o.mdx)("li",{parentName:"ul"},"May send the same events more than once."),(0,o.mdx)("li",{parentName:"ul"},"Is adding a unique event uuid in the event payload."),(0,o.mdx)("li",{parentName:"ul"},"Is passing the same uuid in the ",(0,o.mdx)("inlineCode",{parentName:"li"},"x-adobe-event-id")," header of the webhook request.")),(0,o.mdx)("h3",{id:"do-you-guarantee-the-order-of-events-delivery"},"Do you guarantee the order of events delivery?"),(0,o.mdx)("p",null,"No, see the paragraph above for details."),(0,o.mdx)("h3",{id:"what-permissions-are-required-to-use-io-events"},"What permissions are required to use I/O Events?"),(0,o.mdx)("p",null,"The various required permissions and entitlements vary according to the events provider, (see the list above) some are opened to all Adobe customers, others to enterprise developers or administrators only.\nSome of these events providers will require licensing, while others will be available to all.\nPlease reach out to your Adobe account manager for licensing related questions."),(0,o.mdx)("h3",{id:"which-subscription-types-do-io-events-support"},"Which subscription types do I/O Events support?"),(0,o.mdx)("p",null,"I/O Events supports ",(0,o.mdx)("a",{parentName:"p",href:"../guides/index.md"},"webhooks")," for near-real time notifications (push) as well as ",(0,o.mdx)("a",{parentName:"p",href:"../guides/journaling_intro.md"},"a Journaling API")," (pull) to grab groups of events at a time."),(0,o.mdx)("h3",{id:"what-should-i-do-if-i-am-unable-to-delete-a-project-because-of-a-conflicting-provider"},"What should I do if I am unable to delete a project because of a conflicting provider?"),(0,o.mdx)("p",null,"If while deleting a project in developer console, you get an error as shown in the screenshot below, it means that you created an event provider associated with the same workspace, and until you delete that event provider you cannot go ahead with the project deletion."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1163px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"37.18749999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/cf132b2f48896bb776fc16c1de8ccede/5530d/project-delete-violation.webp 320w","/adobe-io-events/static/cf132b2f48896bb776fc16c1de8ccede/0c8fb/project-delete-violation.webp 640w","/adobe-io-events/static/cf132b2f48896bb776fc16c1de8ccede/8f97b/project-delete-violation.webp 1163w"],sizes:"(max-width: 1163px) 100vw, 1163px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/cf132b2f48896bb776fc16c1de8ccede/dd4a7/project-delete-violation.png 320w","/adobe-io-events/static/cf132b2f48896bb776fc16c1de8ccede/0f09e/project-delete-violation.png 640w","/adobe-io-events/static/cf132b2f48896bb776fc16c1de8ccede/a5685/project-delete-violation.png 1163w"],sizes:"(max-width: 1163px) 100vw, 1163px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/cf132b2f48896bb776fc16c1de8ccede/a5685/project-delete-violation.png",alt:"Error while deleting a project",title:"Error while deleting a project",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"If you are sure that the event provider can be deleted, then follow the steps documented below to remove the conflicting event provider:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Select Project overview in the left-side links menu."),(0,o.mdx)("li",{parentName:"ol"},'Click on the "Download" button from the top menu on the right to download the project metadata json file. Open the downloaded json file with your favorite editor, and make note of the following:',(0,o.mdx)("ol",{parentName:"li"},(0,o.mdx)("li",{parentName:"ol"},"Your consumer organization id (at ",(0,o.mdx)("inlineCode",{parentName:"li"},"project.org.id"),")"),(0,o.mdx)("li",{parentName:"ol"},"Your project id (at ",(0,o.mdx)("inlineCode",{parentName:"li"},"project.id"),")"),(0,o.mdx)("li",{parentName:"ol"},"Your workspace id (at ",(0,o.mdx)("inlineCode",{parentName:"li"},"project.workspace.id"),")"))),(0,o.mdx)("li",{parentName:"ol"},"Using the ",(0,o.mdx)("a",{parentName:"li",href:"/adobe-io-events/guides/api/provider_api.md"},"provider API"),", fetch ",(0,o.mdx)("a",{parentName:"li",href:"/adobe-io-events/events/docs/api/#tag/Providers/operation/getProvidersByConsumerOrgId"},"your I/O Events providers entitled to the provided organization id"),", using the consumer organization id noted from above."),(0,o.mdx)("li",{parentName:"ol"},"Find the conflicting provider against your workspace id (found at ",(0,o.mdx)("inlineCode",{parentName:"li"},"project.workspace.id")," from the project json file) from the provider API response, and make a note of the provider ",(0,o.mdx)("inlineCode",{parentName:"li"},"id"),"."),(0,o.mdx)("li",{parentName:"ol"},"Delete the provider via the ",(0,o.mdx)("a",{parentName:"li",href:"/adobe-io-events/events/docs/api/#tag/Providers/operation/deleteProvider"},"provider API"),", using the ids noted in above steps."),(0,o.mdx)("li",{parentName:"ol"},"Repeat the above steps for all conflicting event providers and try deleting the project again. Your project deletion should now go through successfully.")),(0,o.mdx)("h3",{id:"why-do-i-see-duplicate-fields-in-the-delivered-payload-for-attributes-recipient-client-id-and-event-id"},"Why do I see duplicate fields in the delivered payload for attributes recipient client id and event id?"),(0,o.mdx)("p",null,"I/O Events sends cloud event payloads with internal custom attributes like ",(0,o.mdx)("inlineCode",{parentName:"p"},"event_id")," (used for event tracking and debugging) and ",(0,o.mdx)("inlineCode",{parentName:"p"},"recipient_client_id")," (used by consumers for payload verification, see ",(0,o.mdx)("a",{parentName:"p",href:"/adobe-io-events/src/pages/guides/index.md#improved-and-resilient-security-verification-for-webhook-events"},"securtiy verification guide"),")."),(0,o.mdx)("p",null,"As part of our recent upgrade to ",(0,o.mdx)("inlineCode",{parentName:"p"},"Java 17"),", we have adopted the latest version of the CloudEvents SDK. This version enforces stricter validation rules for custom attribute names, as outlined in the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/cloudevents/spec/blob/v1.0/spec.md#attribute-naming-convention"},"CloudEvents spec"),". The previous attribute names (",(0,o.mdx)("inlineCode",{parentName:"p"},"event_id")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"recipient_client_id"),") do not conform to these rules and cause serialization failures."),(0,o.mdx)("p",null,"To ensure backward compatibility while rolling out our Java 17 upgrade, we are now including two additional attributes in the payload namely ",(0,o.mdx)("inlineCode",{parentName:"p"},"eventid")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"recipientclientid")," conforming to the cloud events spec."),(0,o.mdx)("p",null,"As a result, you may notice ",(0,o.mdx)("em",{parentName:"p"},"four fields")," in your delivered payload (existing  format - ",(0,o.mdx)("inlineCode",{parentName:"p"},"event_id")," , ",(0,o.mdx)("inlineCode",{parentName:"p"},"recipient_client_id")," and new compliant format ",(0,o.mdx)("inlineCode",{parentName:"p"},"eventid"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"recipientclientid"),")."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Action for consumers")," -\nIf your integration relies on ",(0,o.mdx)("inlineCode",{parentName:"p"},"event_id")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"recipient_client_id"),", please update it to use ",(0,o.mdx)("inlineCode",{parentName:"p"},"eventid")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"recipientclientid"),".  We will ",(0,o.mdx)("em",{parentName:"p"},"deprecate ",(0,o.mdx)("inlineCode",{parentName:"em"},"event_id")," and ",(0,o.mdx)("inlineCode",{parentName:"em"},"recipient_client_id")," by the end of 2025"),", after which only the CloudEvents compliant attributes (",(0,o.mdx)("inlineCode",{parentName:"p"},"eventid")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"recipientclientid"),") will be included in the payload."),(0,o.mdx)("h2",{id:"webhook-faq"},"Webhook FAQ"),(0,o.mdx)("h3",{id:"what-happens-if-my-webhook-is-down-why-is-my-event-registration-marked-as-unstable"},"What happens if my webhook is down? Why is my event registration marked as ",(0,o.mdx)("inlineCode",{parentName:"h3"},"Unstable"),"?"),(0,o.mdx)(s.default,{mdxType:"RetryDoc"}),(0,o.mdx)("p",null,"Note: You can then use the ",(0,o.mdx)("a",{parentName:"p",href:"../guides/journaling_intro.md"},"Journaling API")," to ",(0,o.mdx)("strong",{parentName:"p"},"retrieve")," events that were published while your webhook was down. Once your webhook gets restored, you can re-enable your event registration (see the question below)."),(0,o.mdx)("h3",{id:"how-can-i-re-enable-my-event-registration-disabled-after-a-downtime-how-can-i-retrieve-the-events-i-missed"},"How can I re-enable my event registration (disabled after a downtime)? How can I retrieve the events I missed?"),(0,o.mdx)("p",null,"To restart the flow of requests, fix the problem preventing your webhook from responding. Then, log into the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Adobe Developer Console")," and edit your event registration. This re-triggers a webhook challenge request, and eventually a re-activation of your event registration."),(0,o.mdx)("p",null,"While your event registration is marked ",(0,o.mdx)("inlineCode",{parentName:"p"},"Disabled"),", Adobe will continue to log events in your Journal, allowing you to retrieve all events for the past 7 days (see our ",(0,o.mdx)("a",{parentName:"p",href:"../guides/journaling_intro.md"},"Journaling documentation"),")."),(0,o.mdx)("h3",{id:"what-happens-if-my-webhook-is-unable-to-handle-a-specific-event-but-handles-all-other-events-gracefully"},"What happens if my webhook is unable to handle a specific event but handles all other events gracefully?"),(0,o.mdx)("p",null,"Please note that if an event delivery fails with a response status code of ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429"},"429 Too Many Requests"),", or with any response status code in the range of 500 to 599 except for ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505"},"505 HTTP Version Not Supported"),", then those events are retried. Events that fail with any other response status codes are ",(0,o.mdx)("strong",{parentName:"p"},"not retried"),"."),(0,o.mdx)("p",null,"We continue to retry the event delivery for 24 hours. If all retry attempts are exhausted and the event still isn't delivered, the event will be dropped.\nHowever, do note that the event registration will remain as ",(0,o.mdx)("strong",{parentName:"p"},"Active")," and shall continue to process events."),(0,o.mdx)("h3",{id:"does-every-adobe-io-events-webhook-http-request-come-with-a-signature"},"Does every Adobe I/O Events webhook HTTP request come with a signature?"),(0,o.mdx)("p",null,"Yes, to allow your webhook to reject forged requests, Adobe I/O Events adds a ",(0,o.mdx)("a",{parentName:"p",href:"../guides/index.md#security-considerations"},(0,o.mdx)("inlineCode",{parentName:"a"},"x-adobe-signature"))," header to every single HTTP request it makes to your webhook URL (even the first ",(0,o.mdx)("inlineCode",{parentName:"p"},"challenge")," GET request)."),(0,o.mdx)("h3",{id:"do-adobe-io-events-notifications-come-from-a-range-of-static-ips"},"Do Adobe I/O Events notifications come from a range of static IPs?"),(0,o.mdx)("p",null,"We had a few customers asking this in the context of securing their endpoint;  their requirement: accepting traffic only from a range of static IPs."),(0,o.mdx)("p",null,"The answer is ",(0,o.mdx)("strong",{parentName:"p"},"no"),". Adobe I/O Events notifications services are hosted on AWS and Azure, their IPs change over time."),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"Reminder"),": Each Adobe I/O Events HTTP request holds a signature header (see the previous question), however if this is not enough and if the above is a non-negotiable requirement, you may choose to use the pull model instead, and leverage our ",(0,o.mdx)("a",{parentName:"p",href:"../guides/journaling_intro.md"},"Journaling API"),"."),(0,o.mdx)("h3",{id:"what-is-the-size-of-notifications-when-in-batch-delivery-style"},"What is the size of notifications when in batch delivery style?"),(0,o.mdx)("p",null,"When registering a webhook to receive Adobe I/O Events notifications, you can select the delivery style:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},'Either receiving one event at a time ("Single"): each event resulting in an HTTP request to the webhook URL.'),(0,o.mdx)("li",{parentName:"ul"},'Or multiple events together ("Batch"): in this case, HTTP requests will still remain near-real time, the batch size will vary depending on the incoming traffic and the batch size will be at max 2MB bytes and will contain a maximum of 20 events.')),(0,o.mdx)("h3",{id:"how-to-debug-and-see-logs-for-successful-invocations-to-my-runtime_action-configured-as-webhook"},"How to debug and see logs for successful invocations to my runtime_action (configured as webhook)"),(0,o.mdx)("p",null,"To improve the debugging experience for successful invocations, user can relay the ",(0,o.mdx)("inlineCode",{parentName:"p"},"activation_id")," of\nhis target user action as a new response header (for example, you can use this header ",(0,o.mdx)("inlineCode",{parentName:"p"},"x-target-action-activation-id"),")\nfrom that action itself.\nSo, even without enabling the ",(0,o.mdx)("inlineCode",{parentName:"p"},"x-ow-extra-logging=on")," header and impacting runtime performance,\nuser can get hold of the successful activation via the debug tracing on Developer Console."),(0,o.mdx)("h2",{id:"journaling-faq"},"Journaling FAQ"),(0,o.mdx)("h3",{id:"how-far-back-are-io-events-available-via-the-journaling-api"},"How far back are I/O Events available via the Journaling API?"),(0,o.mdx)("p",null,"Adobe I/O stores 7 days of subscribed events that can be retrieved via the Journaling API."),(0,o.mdx)("h3",{id:"why-do-i-only-get-one-event-irrespective-of-the-limit-i-use"},"Why do I only get one event, irrespective of the ",(0,o.mdx)("inlineCode",{parentName:"h3"},"limit")," I use?"),(0,o.mdx)("p",null,"Our Journaling API ",(0,o.mdx)("inlineCode",{parentName:"p"},"limit")," parameter is used to specify the “maximum” number of events that may be returned by the API.\nIt is used to specify an upper bound to the number of events to ensure that the consumer can handle the response gracefully. The behavior you observe is expected.\nIt is perfectly ok to get 1 event when you specify a limit greater than 1.\nThe number of events that gets returned in a response can vary depending on the incoming traffic (upper bound being equal to the limit parameter).\nSee our ",(0,o.mdx)("a",{parentName:"p",href:"../guides/api/journaling_api.md#limiting-the-size-of-the-batch"},"Journaling API documentation")," for more details."),(0,o.mdx)("h3",{id:"is-there-a-way-to-retrieve-all-events-in-one-request"},"Is there a way to retrieve all events in one request?"),(0,o.mdx)("p",null,"No, our journaling API does not support retrieving all events in a single query."),(0,o.mdx)("p",null,"However, by using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"since")," parameter, you can fetch events incrementally by following the journal's ",(0,o.mdx)("a",{parentName:"p",href:"../guides/api/journaling_api.md#fetching-the-next-batch-of-newer-events-from-the-journal"},"rel=next Link")," in the response headers until all events have been retrieved."),(0,o.mdx)("h2",{id:"custom-events-faq"},"Custom Events FAQ"),(0,o.mdx)("h3",{id:"i-created-a-custom-events-provider-why-is-it-not-showing-up-in-the-adobe-developer-console"},"I created a ",(0,o.mdx)("inlineCode",{parentName:"h3"},"Custom Events Provider"),", why is it not showing up in the ",(0,o.mdx)("inlineCode",{parentName:"h3"},"Adobe Developer Console"),"?"),(0,o.mdx)("p",null,"If you successfully create a ",(0,o.mdx)("inlineCode",{parentName:"p"},"Custom Events Provider")," using our ",(0,o.mdx)("a",{parentName:"p",href:"../guides/api/provider_api.md"},"Provider API"),", it will only appear in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Adobe Developer Console")," once you create at least one ",(0,o.mdx)("inlineCode",{parentName:"p"},"Event Metadata")," associated with it."),(0,o.mdx)("p",null,"Once associated with its ",(0,o.mdx)("inlineCode",{parentName:"p"},"Event Metadata"),", your ",(0,o.mdx)("inlineCode",{parentName:"p"},"Custom Events Provider")," will be ready to be used:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"It will appear in your (refreshed) ",(0,o.mdx)("inlineCode",{parentName:"li"},"Adobe Developer Console")," project."),(0,o.mdx)("li",{parentName:"ol"},"You will be able to register against it."),(0,o.mdx)("li",{parentName:"ol"},"And to start emitting events on its behalf use our ",(0,o.mdx)("a",{parentName:"li",href:"../guides/api/eventsingress_api.md"},"Events Publishing API"),".")),(0,o.mdx)("h3",{id:"does-custom-events-provider-support-high-volume--do-you-have-a-throttling-policy-in-place-"},"Does ",(0,o.mdx)("inlineCode",{parentName:"h3"},"Custom Events Provider")," support High Volume ? Do you have a throttling policy in place ?"),(0,o.mdx)("p",null,"We do have a throttling policy in place, read our ",(0,o.mdx)("a",{parentName:"p",href:"../guides/api/eventsingress_api.md"},"Events Publishing API guide")," for more details.\nHowever, if you have a high volume use-case in mind, contact us, we'd love to hear about it\nand discuss how we could accommodate it."),(0,o.mdx)("h2",{id:"analytics-triggers-events"},"Analytics Triggers Events"),(0,o.mdx)("h3",{id:"where-can-i-find-instructions-on-setting-up-analytics-triggers-for-io"},"Where can I find instructions on setting up Analytics Triggers for I/O?"),(0,o.mdx)("p",null,"You'll find it in this guide at ",(0,o.mdx)("a",{parentName:"p",href:"../guides/using/analytics-triggers-event-setup.md"},"Integrate Analytics Triggers with Adobe I/O Events"),"."),(0,o.mdx)("h3",{id:"where-do-i-configure-analytics-triggers-for-io"},"Where do I configure Analytics Triggers for I/O?"),(0,o.mdx)("p",null,"Analytics Triggers are set up and managed via the Experience Cloud Activation UI. Once a Trigger has been created, it will appear in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Adobe Developer Console")," under the available I/O Events list."),(0,o.mdx)("h3",{id:"what-does-an-analytics-triggers-payload-look-like"},"What does an Analytics Triggers payload look like?"),(0,o.mdx)("p",null,"Here is a sample:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "event_id": "52ebf673-8aeb-4347-8852-bf86a18292e4",\n  "event": {\n    "envelopeType": "DATA",\n    "partition": 13,\n    "offset": 438465548,\n    "createTime": 1516324157242,\n    "topic": "triggers",\n    "com.adobe.mcloud.pipeline.pipelineMessage": {\n      "header": {\n        "messageType": "TRIGGER",\n        "source": "triggers",\n        "sentTime": 1516324157228,\n        "imsOrg": "C74F69D7594880280A495D09@AdobeOrg",\n        "properties": [\n          {\n            "name": "trace",\n            "value": "false"\n          },\n          {\n            "name": "sourceFirstTimestamp",\n            "value": "1516324106"\n          },\n          {\n            "name": "sourceLastTimestamp",\n            "value": "1516324128"\n          },\n          {\n            "name": "triggerFiredTimestamp",\n            "value": "1516324153995"\n          }\n        ],\n        "messageId": "1a69fc40-7600-4928-b7bb-d66588a045f3"\n      },\n      "com.adobe.mcloud.protocol.trigger": {\n        "triggerId": "697514a8-3337-4efc-ba75-1f0ba896c288",\n        "triggerTimestamp": 1516324157228,\n        "mcId": "00000000000000000000000000000000000000",\n        "enrichments": {\n          "analyticsHitSummary": {\n            "dimensions": {\n              "eVar3": {\n                "type": "string",\n                "data": [\n                  "localhost:4502/content/we-retail.html",\n                  "localhost:4502/content/we-retail/us/en/men.html",\n                  "localhost:4502/content/we-retail.html",\n                  "localhost:4502/content/we-retail/us/en.html",\n                  "localhost:4502/content/we-retail/us/en.html",\n                  "localhost:4502/content/we-retail/us/en/products/men/shirts/eton-short-sleeve-shirt.html",\n                  "localhost:4502/content/we-retail/us/en/products/men/shirts/eton-short-sleeve-shirt.html",\n                  "localhost:4502/content/we-retail/us/en/men.html",\n                  "localhost:4502/content/we-retail/us/en/user/cart.html"\n                ],\n                "name": "eVar3",\n                "source": "session summary"\n              },\n              "pageURL": {\n                "type": "string",\n                "data": [\n                  "http://localhost:4502/content/we-retail.html",\n                  "",\n                  "",\n                  "http://localhost:4502/content/we-retail/us/en.html",\n                  "",\n                  "",\n                  "http://localhost:4502/content/we-retail/us/en/products/men/shirts/eton-short-sleeve-shirt.html",\n                  "http://localhost:4502/content/we-retail/us/en/men.html",\n                  "http://localhost:4502/content/we-retail/us/en/user/cart.html"\n                ],\n                "name": "pageURL",\n                "source": "session summary"\n              }\n            },\n            "products": {}\n          }\n        },\n        "triggerPath": [\n          {\n            "timestamp": 1516324118010,\n            "stateId": "start_and_and",\n            "transition": "null"\n          },\n          {\n            "timestamp": 1516324148711,\n            "stateId": "vmi_and_1",\n            "transition": "conditional -> select * where evars.evars.eVar3 like \'localhost:4502/content/we-retail/us/en/user/cart.html\'"\n          },\n          {\n            "timestamp": 1516324148711,\n            "stateId": "notify_wait",\n            "transition": "states visited -> [StateVisitedNode [stateId=vmi_and_1, count=1, operator=GE]]"\n          },\n          {\n            "timestamp": 1516324153994,\n            "stateId": "notify",\n            "transition": "inactive_timeout -> 5"\n          }\n        ]\n      }\n    }\n  }\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"I receive errors trying to access Triggers.")),(0,o.mdx)("p",null,"The company/org is entitled for Analytics Triggers but I receive the following errors when trying to set up a Trigger:"),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"936px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/933dbc89c29324c674d653c01f9ffaff/5530d/events_FAQ_01.webp 320w","/adobe-io-events/static/933dbc89c29324c674d653c01f9ffaff/0c8fb/events_FAQ_01.webp 640w","/adobe-io-events/static/933dbc89c29324c674d653c01f9ffaff/a7d94/events_FAQ_01.webp 936w"],sizes:"(max-width: 936px) 100vw, 936px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/933dbc89c29324c674d653c01f9ffaff/dd4a7/events_FAQ_01.png 320w","/adobe-io-events/static/933dbc89c29324c674d653c01f9ffaff/0f09e/events_FAQ_01.png 640w","/adobe-io-events/static/933dbc89c29324c674d653c01f9ffaff/6d612/events_FAQ_01.png 936w"],sizes:"(max-width: 936px) 100vw, 936px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/933dbc89c29324c674d653c01f9ffaff/6d612/events_FAQ_01.png",alt:"Report Suite null",title:"Report Suite null",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"936px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.3125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/acebbdd6981d3f239fb8386746fa8454/5530d/events_FAQ_02.webp 320w","/adobe-io-events/static/acebbdd6981d3f239fb8386746fa8454/0c8fb/events_FAQ_02.webp 640w","/adobe-io-events/static/acebbdd6981d3f239fb8386746fa8454/a7d94/events_FAQ_02.webp 936w"],sizes:"(max-width: 936px) 100vw, 936px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/acebbdd6981d3f239fb8386746fa8454/dd4a7/events_FAQ_02.png 320w","/adobe-io-events/static/acebbdd6981d3f239fb8386746fa8454/0f09e/events_FAQ_02.png 640w","/adobe-io-events/static/acebbdd6981d3f239fb8386746fa8454/6d612/events_FAQ_02.png 936w"],sizes:"(max-width: 936px) 100vw, 936px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/acebbdd6981d3f239fb8386746fa8454/6d612/events_FAQ_02.png",alt:"Error fetching Report Suites",title:"Error fetching Report Suites",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"To fix:"),"  Ensure that Triggers is enabled in the Analytics Product Profile in the Admin Console."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"974px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"69.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/6469160cfc20b1a79816b567c80a83fc/5530d/events_FAQ_03.webp 320w","/adobe-io-events/static/6469160cfc20b1a79816b567c80a83fc/0c8fb/events_FAQ_03.webp 640w","/adobe-io-events/static/6469160cfc20b1a79816b567c80a83fc/c1156/events_FAQ_03.webp 974w"],sizes:"(max-width: 974px) 100vw, 974px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/6469160cfc20b1a79816b567c80a83fc/dd4a7/events_FAQ_03.png 320w","/adobe-io-events/static/6469160cfc20b1a79816b567c80a83fc/0f09e/events_FAQ_03.png 640w","/adobe-io-events/static/6469160cfc20b1a79816b567c80a83fc/1ed31/events_FAQ_03.png 974w"],sizes:"(max-width: 974px) 100vw, 974px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/6469160cfc20b1a79816b567c80a83fc/1ed31/events_FAQ_03.png",alt:"Enabling Triggers in Admin Console",title:"Enabling Triggers in Admin Console",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-support-faq-md-372887355c4a6ff2beba.js.map