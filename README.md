# Background
[TJ Luoma][tjluoma] wrote [a blog post on Engadget][post] describing how to use a combination of [Fluid][] and [Choosy][] to 
create a segregated browsing environment for browsing Facebook. This extension presupposes you've configured your computer 
according to TJ's excellent advice.

# Fluidbook
Fluidbook is a simple extension for Safari and Chrome that monitors for Facebook requests and redirects them to Choosy for 
opening in your dedicated Facebook Fluid app.

# Caveats

## Chrome and External URL Scheme Protocols
This extension uses the `x-choosy://` URL scheme to open the URL in Choosy. The first time this occurs in Chrome, 
you might see a prompt asking how you'd like to handle that situation. To make sure things go smoothly, you can 
choose to open a Choosy URL outside of this extension first and tell Chrome to always handle them the same way.
Here's a nice URL you can use: `x-choosy://open/https://agilebits.com/onepassword` (You'll have to copy and paste 
because Github won't auto-link the `x-choosy` URL scheme.

[Fluid]: http://fluidapp.com
[Choosy]: http://www.choosyosx.com "Forget the default browser, Choosy opens links in the right browser."
[tjluoma]: http://luo.ma "Rhymes with Diploma"
[post]: http://www.engadget.com/2014/06/16/how-to-make-a-fluid-app-for-facebook-to-protect-your-online-priv/ "How to make a Fluid app for Facebook to protect your online privacy"
