function compterElements(e){return document.querySelectorAll(e).length}console.log(compterElements("p")),console.log(compterElements(".adjectif")),console.log(compterElements("p .adjectif")),console.log(compterElements("p > .adjectif"));