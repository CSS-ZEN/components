import React from 'react'

import Markdown from './markdown'


// @ts-ignore
const basicMarkdown = `
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt ornare nibh, non elementum augue tempus eget. Pellentesque tempus scelerisque iaculis.<!--more--> Nullam interdum ultricies nibh quis sollicitudin. Donec ornare fermentum facilisis. Ut at sem ac sem imperdiet varius a eget tortor. Nam eu augue eget orci semper maximus in eget augue. Mauris ornare, nisl ut suscipit consectetur, mi quam interdum tellus, at rutrum quam eros ultrices mi.

# Headers

# H1
## H2
### H3
#### H4
##### H5
###### H6

## Text formatting

- **Bold**
- _Italics_
- ~~Strikethrough~~
- <ins>Underline</ins>
- <sup>Superscript</sup>
- <sub>Subscript</sub>
- Abbreviation: <abbr title="HyperText Markup Language">HTML</abbr>
- Citation: <cite>&mdash; Chester How</cite>

## Lists

1. Ordered list item 1
2. Ordered list item 2
3. Ordered list item 3

* Unordered list item 1
* Unordered list item 2
* Unordered list item 3

## Links

Check out on [GitHub](https://github.com/csszen/components).

## Images

![Placeholder image](http://placehold.it/800x400 "Placeholder image")

![Image with caption](http://placehold.it/700x400 "Image with caption")
_This is an image with a caption_

## Code and Syntax Highlighting

\`\`\`js
// Sample javascript code
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\`

\`\`\`python
# Sample python code
s = "Python syntax highlighting"
print(s)
\`\`\`

## Blockquotes

> Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.

## Horizontal Rule & Line Break

Use \`<hr>\` for horizontal rules

<hr>

and \`<br>\` for line breaks.

<br>

_The end_
`

const basicHTML = `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt ornare nibh, non elementum augue tempus eget. Pellentesque tempus scelerisque iaculis.<!--more--> Nullam interdum ultricies nibh quis sollicitudin. Donec ornare fermentum facilisis. Ut at sem ac sem imperdiet varius a eget tortor. Nam eu augue eget orci semper maximus in eget augue. Mauris ornare, nisl ut suscipit consectetur, mi quam interdum tellus, at rutrum quam eros ultrices mi.</p>
<h1>Headers</h1>
<h1>H1</h1>
<h2>H2</h2>
<h3>H3</h3>
<h4>H4</h4>
<h5>H5</h5>
<h6>H6</h6>
<h2>Text formatting</h2>
<ul>
<li><strong>Bold</strong></li>
<li><em>Italics</em></li>
<li>~~Strikethrough~~</li>
<li><ins>Underline</ins></li>
<li><sup>Superscript</sup></li>
<li><sub>Subscript</sub></li>
<li>Abbreviation: <abbr title="HyperText Markup Language">HTML</abbr></li>
<li>Citation: <cite>— Chester How</cite></li>
</ul>
<h2>Lists</h2>
<ol>
<li>Ordered list item 1</li>
<li>Ordered list item 2</li>
<li>Ordered list item 3</li>
</ol>
<ul>
<li>Unordered list item 1</li>
<li>Unordered list item 2</li>
<li>Unordered list item 3</li>
</ul>
<h2>Links</h2>
<p>Check out on <a href="https://github.com/csszen/components">GitHub</a>.</p>
<h2>Images</h2>
<p><img src="http://placehold.it/800x400" alt="Placeholder image" title="Placeholder image"></p>
<p><img src="http://placehold.it/700x400" alt="Image with caption" title="Image with caption">
<em>This is an image with a caption</em></p>
<h2>Code and Syntax Highlighting</h2>
<pre class="shiki" style="background-color: #fff"><code><span class="line"><span style="color: #6A737D">// Sample javascript code</span></span>
<span class="line"><span style="color: #D73A49">var</span><span style="color: #24292E"> s </span><span style="color: #D73A49">=</span><span style="color: #24292E"> </span><span style="color: #032F62">"JavaScript syntax highlighting"</span><span style="color: #24292E">;</span></span>
<span class="line"><span style="color: #6F42C1">alert</span><span style="color: #24292E">(s);</span></span></code></pre>
<pre class="shiki" style="background-color: #fff"><code><span class="line"><span style="color: #6A737D"># Sample python code</span></span>
<span class="line"><span style="color: #24292E">s </span><span style="color: #D73A49">=</span><span style="color: #24292E"> </span><span style="color: #032F62">"Python syntax highlighting"</span></span>
<span class="line"><span style="color: #005CC5">print</span><span style="color: #24292E">(s)</span></span></code></pre>
<h2>Blockquotes</h2>
<blockquote>
<p>Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
</blockquote>
<h2>Horizontal Rule &#x26; Line Break</h2>
<p>Use <code>&#x3C;hr></code> for horizontal rules</p>
<hr>
<p>and <code>&#x3C;br></code> for line breaks.</p>
<br>
<p><em>The end</em></p>
`

export const BasicMarkdown = () => {
    return (
        <section style={{padding: '16px 32px'}}>
            <Markdown content={basicHTML} />
        </section>
    )
}
