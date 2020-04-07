## Project : Loto


2020.04.07, Julie Kwok

**To test the page, go [here](https://julienemo.github.io/thp_next_2/)**

_Github page is obviously in maintaince mode...let's hope it gets back soon_

**To manipulate codes locally, please download repo**

* * *

The page asks for the following information

- a first name (mandatory, without format spec)
- a last name (mandatory, without format spec)
- an email (mandatory, **WITH** format spec)
- 6 integers from 1 to 99 (including), mandatory and not necessarily unique
  
_Email format_:
- _have between 8 and 30 (non-including) chars_
- _have ONE `@` and ONE `.`_
- _have 2 or 3 letters (not just any char) after the `.`_

* * *
At any time, if user click on the button, the above mentioned information will be checked. 

If any of them doesn't pass validation, an error message will be displayed. **Only the LAST the error message will be shown** (project says `Ta fonction devra afficher sur la page HTML UN des messages suivants`).

If all information pass validation, the page will tell the user whether or not all 6 numbers of his choice correspond to the 6 pre-generated winning numbers.

* * *
Email validation: 

regex : `^([a-z0-9\_]+)@([a-z0-9]+)\.[a-z]{2,3}$`
- starting more than one char of only small letters, digits and underscore before `@`
- having an `@`
- having more than one char of only small letters or digits after the `@`
- having 2 or 3 letters after and nothing else
- whole length validation is done with javascript

* * *
Check points:

- [x] form asking for first name, last name, email and 6 numbers
- [x] a submitting button
- [x] the function `const checkLoto = (firstname, lastname, email, lotoNumbers) => {}` (defined at `line 108` called at `line 148`)
- [x] show only ONE message when there is error
- [x] in case of loss, show the pregenerated numbers
- [x] email format validation
- [x] minimum level of CSS