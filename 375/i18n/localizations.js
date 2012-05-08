/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_filetitle": "Extending Titanium",
		"%l_subtitle": "Advanced Titanium Mobile Development",
		"%l_lessontitle": "Extending Titanium",
		"%l_slidenote_titleslide": "<b>Module time: 45 mins</b><br/>(15 mins teaching, 30 mins for lab)",

		"%l_agenda_title": "Agenda",
		"%l_agenda1": "Basic Titanium Internal Architecture",
		"%l_agenda2": "Object Model",
		"%l_agenda3": "Building Modules",
		"%l_agenda4": "Distributing and Installing Modules",
		"%l_agenda5": "Resources",
		"%l_slidenote_agenda": "This lesson is a starting point for developers, not an extensive tutorial. Students with native programming knowledge will get the most from it.<br><br/>Basic Architecture &mdash; introduces internal Titanium implementation, including the Kroll microkernel<br><br/>Object Model &mdash; introduces the key objects and vocabulary for building modules<br><br/>Building modules &mdash; covers how to use titanium SDK to build/package modules<br><br/>Distributing and installing &mdash; covers custom module distribution and use<br><br/>Resources &mdash; docs and help resources available",

		"%l_disclaimer": "Disclaimer!",
		"%l_slidenote_disclaimer": "The intent of this presentation is to brief you on the basics of how Titanium works and to point you in the right direction for further exploration. It is not a comprehensive treatment of the subject. Your instructor might not be an expert module developer.",
		
		"%l_we_know": "We all know the basics...",
		"%l_ti_main_arch_image": "<img src='images/ti-main-arch.png' style='margin-top:5px;height:350px;'/>",
		"%l_slidenote_ti_arch_1": "Discuss titanium mobile app architecture &mdash; JavaScript files comprise application and communicate with native APIs through a bridge layer",

		"%l_ti_arch": "Titanium Architecture",
		"%l_ti_arch_image": "<img src='images/ti-arch.png' style='margin-top:5px;height:250px;float:right;'/>",
		"%l_but_now": "...but now we need to understand the bridge",
		"%l_how_is": "How is a Titanium app packaged?",
		"%l_how_do": "How do I create new behaviors in native code?",
		"%l_js_api": "How do I create a JS API?",
		"%l_slidenote_ti_arch": "In order to extend Titanium, we need to understand the bridge<br><br>we need to understand how a titanium app is packaged at a high level, and what those python scripts are doing to our JS project to package it up<br><br>we need to understand how native APIs are packed into a Titanium application<br><br>Finally, how do we expose native APIs to JavaScript and pass data between them?",

		"%l_when_app": "When a Titanium app launches...",
		"%l_native_starts": "Native app starts - activity is launched (Android) or app delegate is run (iOS)",
		"%l_js_context": "A JavaScript context is created (Rhino/V8 or JSCore)",
		"%l_js_app": "JS app is evaluated starting with app.js",
		"%l_js_comm": "JS Context communicates with C/Java code",
		"%l_bridge": "The 'bridge' between them is what we call Kroll",
		"%l_slidenote_when_app": "",
		
		"%l_the_kroll": "The Kroll Microkernel",
		"%l_what_kroll": "What is Kroll?",
		"%l_met_process": "Metallurgical process by which titanium (the element) is created",
		"%l_name_given": "The name given to the 'cross-language, cross-platform binding and invocation framework'",		
		"%l_microkernel": "It is a microkernel",
		"%l_what_kernel": "What is a kernel?",
		"%l_in_os": "In an OS, it is the bridge between software and hardware",
		"%l_in_ti": "In Titanium, it is the bridge between JavaScript &amp; native code",
		"%l_kroll_url": "https://github.com/appcelerator/kroll",
		"%l_kernel_url": "http://en.wikipedia.org/wiki/Kernel_(computing)",
		"%l_slidenote_what_kernel": "",
		
		"%l_ti_mods": "Titanium Modules",
		"%l_every_ti": "Every Titanium module is plugged into Kroll's microkernel architecture",
		"%l_timods1": "iOS Header File <img src='images/iosheader.png' style='width:400px;vertical-align:middle;'/>",
		"%l_timods2": "Java Class File  <img src='images/javaclass.png' style='width:400px;vertical-align:middle;'/>",
		"%l_slidenote_ti_mods": "Titanium ObjC modules must extend TiModule<br>Titanium Java modules must extend KrollModule<br/><br/>Note that even titanium modules for UI, Database, etc have this same structure &mdash; as you get into module development, look to core modules to see how things are done in ObjC or Java",
		
		"%l_mod_obj": "Module Object Model",
		"%l_proxy": "Proxy - base class that represents the native binding between your JavaScript and native code (a module will have at least one proxy)",
		"%l_view": "View - actual native representation of a view object (for UI components)",
		"%l_viewproxy": "ViewProxy - represents model data (state of the View, in case the View must be released for memory management) and exposes the JavaScript API & events",
		"%l_module_spl": "Module - specialized type of Proxy that describes a specific API set, or namespace",
		"%l_slidenote_mod_obj": "The object model is slightly different between iOS and Android. In iOS, the top level module (i.e. Ti.MyModule) is just a Proxy.  In Android, it's called a 'Module'. They both function as top-level, static interfaces to native code<br><br/>A proxy is an object that interfaces directly with native code &mdash; non-visual modules will just use these objects<br>A visual module will need to implement a view, which is a native representation of a visual component, and a ViewProxy, which contains the state information for a View.  The View could be hidden and removed from memory, but the ViewProxy would still contain information about that view (like the title of a window, background color of a view, etc.)<br>View proxy is a sub class of proxy",
		
		"%l_mod_js": "Module JavaScript Interfaces",
		"%l_proxy_props": "Proxy objects can have public properties:",
		"%l_osname": "-  Ti.Platform.osname",
		"%l_proxy_pub": "Proxy objects can have public methods:",
		"%l_create_win": "-  Ti.UI.createWindow",
		"%l_proxy_listen": "Proxy objects can emit and listen for events:",
		"%l_foo": "-  Ti.App.addEventListener('foo', function(){});",
		"%l_slidenote_mod_js": "",
		
		"%l_ios_proxy": "iOS - Proxy Property",
		"%l_ios_proxy_explain": "To expose a property, simply define an Objective-C property:",
		"%l_iosproxy_code": "\n// From PlatformModule.h\n@property(readonly,nonatomic)  NSString *name;\n@property(readonly,nonatomic)  NSString *model;\n@property(readonly,nonatomic)  NSString *version;\n@property(readonly,nonatomic)  NSString *architecture;\n@property(readonly,nonatomic)  NSString *macaddress;\n ",
		"%l_ios_proxy_explain2": "Exposed in JavaScript as:",
		"%l_iosproxy_code2": "\nvar model = Ti.Platform.model;\n ",
		"%l_slidenote_ios_proxy": "Here's how you'd create a property on an iOS proxy object",
		
		"%l_andr_proxy": "Android - Proxy Property",
		"%l_andr_proxy_explain": "To expose a property, simply define an Objective-C property:",
		"%l_andr_code": "\n// From PlatformModule.java\n@Kroll.getProperty @Kroll.method\npublic String getModel() {\n   return TiPlatformHelper.getModel();\n}\n ",
		"%l_andr_proxy_explain2": "Exposed in JavaScript as:",
		"%l_andr_code2": "\nvar model = Ti.Platform.model;\n ",
		"%l_slidenote_andr_proxy": "You create getter/setter methods which are exposed as properties (and methods) by the KrollModule. You must explicitly declare property as public for it to be visible in JavaScript land.",
		
		"%l_ios_method": "iOS - Proxy Method",
		"%l_ios_method_explain": "To expose a method, simply define an Objective C method:",
		"%l_iosmethod_code": "\n// From PlatformModule.m\n- (NSNumber *)openURL:(NSArray*)args\n{\n   NSString *newUrlString = [args objectAtIndex:0];\n   NSURL * newUrl = [TiUtils toURL:newUrlString proxy:self];\n   BOOL result = NO;\n   if (newUrl != nil)\n   {\n      [[UIApplication sharedApplication] openURL:newUrl];\n   }\n   return [NSNumber numberWithBool:result];\n}\n ",
		"%l_ios_method_explain2": "Exposed in JavaScript as:",
		"%l_iosmethod_code2": "\nTi.Platform.openURL('http://www.google.com');\n ",
		"%l_slidenote_ios_method": "Must implement one of a couple valid signatures (see the wiki)<br>One or more arguments passed in are all accessible via the single NSArray args array",
		
		"%l_andr_method": "Android - Proxy Method",
		"%l_andr_method_explain": "To expose a method, define a public method with @Kroll.method signature:",
		"%l_andrmethod_code": "\n// From PlatformModule.java\n@Kroll.method\npublic boolean openURL(String url) {\n   if (DBG) {\n         Log.d(LCAT, 'Launching viewer for: ' + url);\n   }\n   Uri uri = Uri.parse(url);\n   Intent intent = new Intent(Intent.ACTION_VIEW, uri);\n   try {\n      getActivity().startActivity(intent);\n      return true;\n   } catch (ActivityNotFoundException e) {\n      Log.e(LCAT,'Activity not found: ' + url, e);\n   }\n   return false;\n}\n ",
		"%l_andr_method_explain2": "Exposed in JavaScript as:",
		"%l_andrmethod_code2": "\nTi.Platform.openURL('http://www.google.com');\n ",
		"%l_slidenote_andr_method": "",
		
		"%l_ios_event": "iOS - Native Event Handlers",
		"%l_iosevent_code": "\n// From GeolocationModule.m\n-(void)_listenerAdded:(NSString *)type count:(int)count\n{\n   BOOL startStop = NO;\n   if (count == 1 && [type isEqualToString:@'heading'])\n   {\n      startStop = YES;\n   }\n   else if (count == 1 && [type isEqualToString:@'location'])\n   {\n      startStop = YES;\n   }\n   if (startStop)\n   {\n      TiThreadPerformOnMainThread(^{[self startStopLocationManagerIfNeeded];}, NO);\n   }\n}\n ",

		"%l_slidenote_ios_event": "To react to the adding or removing of event listeners, override the listenerAdded and listenerRemoved methods<br>These methods are automatically invoked when a corresponding JavaScript event listener is added or removed",
		
		"%l_andr_event": "Android - Native Event Handlers",
		"%l_androidevent_code": "\n// From GeolocationModule.java\n@Override\nprotected void eventListenerAdded(String event, int count, KrollProxy proxy)\n{\n   if (TiC.EVENT_HEADING.equals(event)) {\n      if (!compassListenersRegistered) {\n         tiCompass.registerListener();\n         compassListenersRegistered = true;\n      }\n\n   } else if (TiC.EVENT_LOCATION.equals(event)) {\n      // more here ... see GitHub\n   }\n\n   super.eventListenerAdded(event, count, proxy);\n}\n ",
		"%l_slidenote_andr_event": "",
		
		"%l_add_event": "Adding Event Handlers in JavaScript",
		"%l_jsevent_code": "\nTi.Geolocation.addEventListener('heading', function(e) {\n   // do something with current heading\n});\n ",
		"%l_slidenote_add_event": "This JS api is what corresponds to the native code on the two preceding slides.",
		
		"%l_fire_event": "Firing an Event on a Proxy Object",
		"%l_both_proxy": "Both Proxy base classes have a 'fireEvent' method",
		"%l_use_this": "Use this to fire an event back up to a JavaScript object",
		"%l_any_events": "Any events fired from native land via 'fireEvent' can be listened for on a JavaScript object via 'addEventListener'",
		"%l_slidenote_fire_event": "",
		
		"%l_type_bridge": "Type Conversions Across The Bridge",
		"%l_both_platforms": "Both platforms provide utilities for type conversion, both JS &rarr; Native Classes and Native Classes &rarr; JS",
		"%l_some_simple": "Some simple types like Strings and Booleans auto convert",
		"%l_check_other": "Check other module implementations for type conversion examples",
		"%l_slidenote_type_bridge": "",
		
		"%l_build_module": "Building your Module",
		"%l_building1": "Creating a Module Project: <ul style='margin-left:30px;font-size:smaller;'><li>Studio: File, New, Titanium Module</li><li>Command line: use <code>titanium.py</code> in SDK folder</li></ul>",
		"%l_building2": "Android modules developed in Eclipse",
		"%l_building3": "iOS  modules developed in Xcode",
		"%l_building4": "Packaging a Module: <ul style='margin-left:30px;font-size:smaller;'><li>Studio: Packaging icon, choose Package</li><li>Command line: Use <code>titanium.py</code></li></ul><br/><span style=font-size:smaller;'>Either builds a .zip file</span>",
		"%l_slidenote_build_module": "When it comes time to write your own module, Studio provides wizards for creating and later packaging your module. You can also use the titanium.py script, which is included in the SDK folder, to perform those tasks. You'll do the actual module programming in Eclipse or Xcode.",
		
		"%l_distr_module": "Distributing your Module",
		"%l_distro1": "Post zip to your web site",
		"%l_distro2": "Share by email",
		"%l_distro3": "Post on GitHub",
		"%l_distro4": "Submit to the Marketplace",
		"%l_slidenote_distr_module": "You have many options for distributing your module. These are a few of the more common.",

		"%l_using": "Using your Module",
		"%l_using1": "Explode zip to: <ul style='margin-left:30px;font-size:smaller;'><li>PROJECT/modules/<em>platform</em></li><li>SDK_HOME/modules/<em>platform</em></li></ul>",
		"%l_using2": "Include in tiapp.xml",
		"%l_using3": "Require in JavaScript",
		"%l_using4": "Implement the module's API",
		"%l_slidenote_using": "Use your finished module just like any other module. Explode it to either your project or your SDK's modules directory. Include the tag in the tiapp.xml, require it in JavaScript, and implement its API.",

		"%l_resources": "Resources",
		"%l_resources1": "docs.appcelerator.com : Extending Titanium guide",
		"%l_resources2": "docs.appcelerator.com : Titanium API",
		"%l_resources3": "ModDevGuide: github.com/appcelerator/titanium_modules",
		"%l_resources4": "Titanium core modules: github.com/appcelerator/titanium_mobile",
		"%l_resources5": "Anything core Titanium does, you can do in your module",
		"%l_slidenote_resources": "The docs site has module building guides for both iOS and Android, Mobile Web in the works. There's also an API listing for both platforms in the docs. (Javadocs &amp; Xcode docs). See also the module development guide, with sample projects on GitHub.<br/><br/>Anything core Titanium does, you can do also. So check out the core Titanium code for techniques and features.",

		"%l_qa": "Q&amp;A",
		"%l_slidenote_qa": "",
		
		"%l_lab_goals": "Lab Goals",
		"%l_follow_steps": "Follow the steps in the iOS (or Android) module development wiki guide",
		"%l_create_sample": "Create the sample module that guide describes",
		"%l_use_that": "Use that module in a Titanium project",
		"%l_slidenote_lab_goals": ">We will follow along with the module dev guides and try a custom module ourselves.  This is a 'kick the tires' type exercise"
	}
});
