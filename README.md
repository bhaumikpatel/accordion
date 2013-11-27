Accordion
=====================

Create a cool and simple jquery accordion. Lightweight jquery plugin minify 2kb or uncompressed 3kb.
<img src="http://lh5.googleusercontent.com/-8DZSn4H4R_M/UpWh1TnlB-I/AAAAAAAACeU/nSnjDqrcbQo/w817-h394-no/accordion.png" alt="Accordion" title="Accordion" style="max-width:100%;" />
----------
Demo
---------
- [jsFiddle](http://jsfiddle.net/lesson8/96g4h/show/)

Basic Usage
---------

To add this to your website, simply include the latest jQuery library together with `accordion.js`, `accordion.css` into your document's `<head>` and call the function as follows:
```
<dl class="accordion">
    <dt><a class="green">Section <span class="label label-default">0</span></a></dt>
    <dd>
        <div>
            <ul class="accordion-menu">
                <li>Sub Category</li>
                <li>Sub Category</li>
                <li>Sub Category</li>
            </ul>
        </div>
    </dd>
    <dt><a class="blue">Section <span class="label label-primary">1</span></a></dt>
    <dd>
        <p>
            Lorem Ipsum is simply dummy text.</p>
    </dd>
</dl>

```
> **NOTE:** Description list `<dl>` and `<dt>` is required for accordion feature defines a term/name in a description list.

#### <i class="icon-file"></i> Call Accordion

```
$('.accordion').accordion({
    open: false, // First List Open, Default Value: false
    autoStart: false, // Auto Start, Default Value: false
    onHoverActive: false, // On Hover Active, Default Value: false
    slideInterval: 3000, // Expression at specified intervals (in milliseconds) Default Value: 3000
    duration: 'slow', // The default duration is slow. The strings 'fast' and 'slow'.
    easing: 'swing', //  An easing function specifies the speed at which the animation progresses.
    complete: function () { console.log('Complete Event'); } 
    //If supplied, the complete callback function is fired once the accordion is complete.
});

```

