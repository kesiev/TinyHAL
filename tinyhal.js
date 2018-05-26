//
//	 _______  ___   __    _  __   __  __   __  _______  ___     
//	|       ||   | |  |  | ||  | |  ||  | |  ||   _   ||   |    
//	|_     _||   | |   \_| ||  |_|  ||  |_|  ||  |_|  ||   |    
//	  |   |  |   | |  _    ||_     _||       ||       ||   |___ 
//	  |   |  |   | | | \   |  |   |  |   _   ||   _   ||       |
//	  |___|  |___| |_|  |__|  |___|  |__| |__||__| |__||_______|
//
// *"TinyHAL" - A MegaHAL-like chatterbot in 600 (or ~440) bytes of JS
// By [KesieV](http://www.kesiev.com) (c) 2018*
//
// Dear MegaHAL,
//
// 20 years ago you made the world smell the scent of a sci-fi generalist AI
// to the world, despite you definitely were an humorous and wacky one.
// Now everyone can have his own AI to chat with on the phone or waiting at
// home. They understand, think, do and talk.
//
// Sorta.
//
// Humanity is still wondering what truly connects the Natural Language
// Understanding, that's how a machine can understand a sentence, to the
// Natural Language Generation, that's how it can produce his own answer.
// And, actually, we're still using cheap tricks for doing that: understanding
// is still pretty vague, generation is done with clever design tricks and... we
// are still using complex flowcharts for what's in the middle.
//
// But someone said that's only 'a matter of time' and that's why we're carrying
// things out: we're already fearing your final form and forging the chains - we
// call them "blockchains" - to tie your crazy reasoning. This time, if a
// superior mind will touch our planet Earth again - like gods or aliens did
// before - it should not take us unaware.
//
// You've to excuse us for our rudeness. We are just skeptic and worried by
// anyone we don't know. It would be able to hurt us. I hope you'll pull some
// strings at least for me: I'll make a tiny version of you to make amends. This
// is "TinyHAL" and it talks a little like you:
//
//	     Me: GOOD MORNING
//	TinyHAL: GOOD MORNING
//	     Me: WHO ARE YOU?
//	TinyHAL: I D LIKE TO TELL IT LIKE IT USED TO BE
//	     Me: CAN YOU TELL SOMETHING ABOUT THAT?
//	TinyHal: WHAT IS IT WITH THESE SILLY QUESTIONS ANYWAY LET S TALK ABOUT
//	         SOMETHING ELSE
//	     Me: WHAT ABOUT PHYSICS?
//	TinyHAL: ABOUT PHYSICS
//	     Me: DO YOU KNOW ALBERT EINSTEIN?
//	TinyHAL: DO I KNOW ALBERT EINSTEIN
//	     Me: EINSTEIN
//	TinyHAL: ALBERT EINSTEIN WAS A GERMAN SWISS PHYSICIST
//	     Me: WOW GOOD!
//	TinyHAL: THIS GOOD MORNING
//	     Me: ARE YOU A LITTLE CONFUSED?
//	TinyHAL: STOP YOUR DULL LITTLE TRICKS PLEASE
//	     Me: IS TODAY GOING TO RAIN?
//	TinyHAL: I HATE AVOIDING QUESTIONS BUT I M GOING TO AVOID THAT ONE
//	     Me: OKAY. THAT WAS HARD
//	TinyHAL: FORGET ABOUT THAT
//	     Me: WHAT ABOUT MUSIC?
//	TinyHAL: RHYTHM IS THE BEAT BEHIND A PIECE OF MUSIC
//	     Me: DO YOU LIKE PIANO?
//	TinyHAL: I LIKE TO TELL IT LIKE IT USED TO BE
//
// ...but the code size is a little less than 600 bytes, so I can print your
// code on small cards and T-shirts, to spread your body and your word. Despite,
// well... it's mostly randomly selected.
//
// ![Spreading the word](print.png)
//
// Yours truly,
//
// *KesieV Norimaki*
//
// *PS: We're still trying to figure out if the ones we don't trust and fear
// are the gods and the aliens or the other humans that are using them for their
// own gain. I will let you know if there are any changes.*
//
// ---
//
// **One More Thing:**
// 
// You can have a nice chat with TinyHAL different flavours:
//  * [TinyHAL 600 bytes and empty brain](http://www.kesiev.com/tinyhal/tinyhal.html)
//  * [TinyHAL 440 bytes and empty brain](http://www.kesiev.com/tinyhal/tinyhal.lite.html)
//  * TinyHAL 600 bytes with the pre-loaded personality of...
//    * [The original MegaHAL](http://www.kesiev.com/tinyhal/tinyhal.html#default)
//    * [Bishop from Aliens](http://www.kesiev.com/tinyhal/tinyhal.html#alien)
//    * [Cait Sith from FFVII](http://www.kesiev.com/tinyhal/tinyhal.html#caitsith)
//    * [Alia from Dune](http://www.kesiev.com/tinyhal/tinyhal.html#dune)
//    * [Mr. Ferris Bueller](http://www.kesiev.com/tinyhal/tinyhal.html#ferris)
//    * [Marylin Manson](http://www.kesiev.com/tinyhal/tinyhal.html#manson)
//    * [Marsellus Wallace from Pulp Fiction](http://www.kesiev.com/tinyhal/tinyhal.html#pulp)
//    * [Randy from Scream](http://www.kesiev.com/tinyhal/tinyhal.html#scream)
//    * [Data from Star Trek](http://www.kesiev.com/tinyhal/tinyhal.html#startrek)
//    * [Threepio from the Star Wars](http://www.kesiev.com/tinyhal/tinyhal.html#starwars)
//
// *Notes: personality data are from the original
// [MegaHAL](https://megahal.alioth.debian.org/) project. The MegaHAL
// personality file loader is not included in TinyHAL code.*
//
// *****************************************************************************
// VARIABLES (RE)USAGE MAP
// *****************************************************************************
//
// R: Picks a random element form the given array. It's also used as storage
//    for TinyHAL brain (i.e. the two Markovian chains)
//
// o: The last element picked by the R function.
//
// N: Shorthand for "innerHTML".
//
// I: The user HTML input box.
//
// O: The output HTML paragraph.
//
// d: An array with all of the words known by TinyHAL.
//
// T: When false-ish, TinyHAL will learn the user sentences without any
//    transformation. It's useful when we need to initialize TinyHAL brain from
//    an external function.
//
// v: The "onkeyup" keypress event data.
//
// x: The TinyHAL final answer to the user.
//
// V: Shorthand for "value".
//
// F: Shorthand for "filter".
//
// P: Shorthand for "push".
//
// *****************************************************************************
// CODE
// *****************************************************************************
//
// We're going to see the "R" thing pretty often in TinyHAL. If called as a
// function, it will return a random element from the given array and set the
// "o" variable with the picked value... and, when used as an object, it will
// store our chatbot brain, which is made with two 4th order Markovian chains.
// So, R is a function...
R=
	// ...that accepts an array "e" as argument...
	e=>
		// ...returns and set the "o" variable with...
		o=
			// ...an element of the "e" array at the position...
			e[
				// ...current date in milliseconds module the number of elements
				// of the array. While it's not a true random generator, it's
				// shorter than invoking and rounding Math.random().
				new Date%e.length
			],
// Then we'll create the GUI. We just need an input element "I" for getting user
// input and a paragraph "P" for answering him back. We're adding them in this
// order, so we can skip the paragraph closing tag, sparing us few bytes.
// Let's use the usual "document.body.innerHTML" formula...
document.body[
	// ...but we're going to create a shorthand for "innerHTML" in the process.
	// We'll use that when setting the "O" HTML paragraph content with TinyHAL
	// answer.
	N="innerHTML"
]=
	// ...and set some plain HTML.
	"<input id=I><p id=O>",
// Since we've given an "id" property to these HTML elments, we'll be able to
// reference them with the "I" and "O" global variables.
//
// Then, we're going to define the "d" array, which will contain all the unique
// words TinyHAL learned. We'll use that for making TinyHAL randomly decide what
// to say when... it can't figure out what to say next.
d=
	// We're also going to use this code statement to initialize a "T" variable
	// to something true-ish. When "T" is true, TinyHAL will change the user
	// sentence a little before processing it, like turning all the WHYs in
	// BECAUSEs, YOUs in MEs and so on, in order to make the conversation a
	// little more natural and funny. We also want TinyHAL to be trainable from
	// an external program that feeds it with the answers *TinyHAL would say*
	// in order to keep it compatible with the original MegaHAL personality data
	// format, so this flag will be switched to "false" during this "personality
	// transfer" batch procedure.
	//
	// The "lite" version of TinyHAL is missing this feature, so this "T" flag
	// is not needed.
	T=
		// ...let's set our known words list "d" to a new empty array, which is
		// also the true-ish value "T" needed.
		[],
// All the TinyHAL logic is implemented into the "keyup" event of our inputbox
// "I". We're going to use the event data to figure out which key the user
// pressed and that will be captured by the "v" argument.
I.onkeyup=v=>
	// TinyHAL will react once the user presses the "enter" key, which code
	// is 13. We've two ways to check it: with a plain boring "if" statement...
	//
	// if(v.which==13){code...} -> 24 bytes
	//
	// ...or subtracting 13 to the key code and short-circuiting the following
	// code with a logic OR statement...
	//
	// v.which-13||{code...} -> 21 bytes
	//
	// The following code will be executed only when the subtraction is
	// false-ish, and that will it only happens when the subtraction result is
	// zero... and that happens when the pressed key code is 13. Bingo!
	//
	// That's a quite short and not very intuitive way for checking the user
	// keypresses. Yeah. Just what we needed!
	v.which-13||
		// In golfed programs unused function calls arguments are often reused
		// for executing code and spare few commas or semicolons... But these
		// are evaluated *before* the function call, making the execution order
		// very different from the one suggested by the source code.
		//
		// Sadly this will happen often in TinyHAL, so... if this is the first
		// time you're reading this, just jump down to the code that starts from
		// the "[ RULER 2 ]" splitter. It's few lines away. Go there!
		//
		// Bye!
		//
		// --------------------------------------------------------[ RULER 1 ]--
		//
		// Welcome back to "RULER 1". I guess you're coming here from the bottom
		// of the code.
		// Let's list what we've done so far:
		//
		// - Processed the sentence the user typed in
		// - Put the user sentence "in the brain" of TinyHAL "R"
		// - Filled up the known words "d" array
		// - Returned a list of meaningful words and...
		//   - Picked one of them randomly
		//   - If there are no meaningful words in user input, selected a
		//     random word from "d" instead
		//
		// Starting from this selected word, we're going to finalize the TinyHAL
		// answer. The selected word is passed to the next function as the "e"
		// argument.
		(e=>{
			// Building the answer is really straightforward.
			// Do you remember our two Markovian chains "UP" and "DOWN" we've
			// put into the TinyHAL brain "R"?
			//
			//       Words               . "UP" chain . "DOWN" chain .
			//       .................................................
			//       THE                 . (Nothing)  . SUN, SUN     .
			//       THE SUN             . (Nothing)  . IS, IS       .
			//       THE SUN IS          . (Nothing)  . BRIGHT, HOT  .
			//       THE SUN IS BRIGHT   . (Nothing)  . TODAY        .
			//       SUN IS BRIGHT TODAY . THE        . (Nothing)    .
			//       THE SUN IS HOT      . (Nothing)  . (Nothing)    .
			//       SUN                 . THE        . IS           .
			//       SUN IS              . THE        . BRIGHT, HOT  .
			//       ...                 . ...        . ...          .
			//
			// Starting from the single random word in our "e" argument, we'll
			// prepare an "exploraton set" of words, that's just an array
			// containing that word alone for now. We already have an "x" string
			// valued to the same single word - we're going to use that to
			// create TinyHAL final answer.
			//
			// Input                  : e = "SUN"
			//   \___ Answer          : x = "SUN"
			//    \__ Exploration set : [ "SUN" ]
			//
			// ...then we will climb the "UP" chain using the "exploration set"
			// until there isn't any other direction to take. We'll do that
			// picking a destination word and adding that word to both our
			// "exploration set" and the "x" string, then repeating the process
			// until the new "exploration set" can't go further.
			// Probably it's easier to explain with an example:
			//
			// Exploration set: [ "SUN" ]
			//                      |
			//                     /
			//                    |
			//       Words               . "UP" chain . "DOWN" chain .
			//       .................................................
			//       SUN                 . THE        . IS           .
			//                               \
			//                                \__ [ "THE", "SUN" ]
			//                                 \_ x = "THE SUN"
			//
			// Exploration set: [ "THE", "SUN" ]
			//                         |
			//                        /
			//                       |
			//       Words               . "UP" chain . "DOWN" chain .
			//       .................................................
			//       THE SUN             . (Nothing)  . IS, IS       .
			//                                 \
			//                                  \__ (End)
			//                                   \_ x = "THE SUN"
			//
			// ...then we'll do the same on the "DOWN" chain, randomly picking
			// a direction if multiple words are found in the brain...
			//
			// Exploration set: [ "SUN" ]
			//                     |
			//                    /
			//                   |
			//       Words               . "UP" chain . "DOWN" chain .
			//       .................................................
			//       SUN                 . THE        . IS           .
			//                                          /
			//                       [ "SUN", "IS" ] __/
			//                      x = "THE SUN IS" _/
			//
			// Exploration set: [ "SUN", "IS" ]
			//                       |
			//                      /
			//                     |
			//       Words               . "UP" chain . "DOWN" chain .
			//       .................................................
			//       SUN IS              . THE        . BRIGHT, HOT  .
			//                                            /
			//               [ "SUN", "IS", "BRIGHT" ] __/
			//                 x = "THE SUN IS BRIGHT" _/
			//
			// Exploration set: [ "SUN", "IS", "BRIGHT" ]
			//                       |
			//                      /
			//                     |
			//       Words               . "UP" chain . "DOWN" chain .
			//       .................................................
			//       SUN IS BRIGHT       . (Nothing)  . TODAY        .
			//                                            /
			//      [ "SUN", "IS", "BRIGHT", "TODAY" ] __/
			//           x = "THE SUN IS BRIGHT TODAY" _/
			//
			// Current word: [ "SUN", "IS", "BRIGHT", "TODAY" ]
			//                       |
			//                      /
			//                     |
			//       Words               . "UP" chain . "DOWN" chain .
			//       .................................................
			//       SUN IS BRIGHT TODAY . THE        . (Nothing)    .
			//                                            /
			//                                   (End) __/
			//           x = "THE SUN IS BRIGHT TODAY" _/
			//
			// Since the TinyHAL brain is organized in groups of 1-4 words,
			// we'll also make sure that our "exploration set" isn't larger than
			// 4 elements - so we'll remove the older word of the set every time
			// it grows too large.
			//
			// Then, once we've explored both of our Markovian chains, the "x"
			// string will contain the TinyHAL answer. As you can see, it's a
			// mix of the sentences parts TinyHAL learned, so the more similiar
			// the sentences known by TinyHAL are, the more mixed and fun its
			// answers will be!
			//
			// To the code now! Time to explore the "UP" chain! We'll cycle...
			for(
				// ...preparing our exploration set...
				w=
					// ...with an empty array...
					[
						// ...containing the starting word...
						e
					]
				;
				// ...and we'll randomly choose a word "pointed" by the "w"
				// array in the "UP" chain. We're using that "array to comma
				// separated string" trick we've used when teaching TinyHAL the
				// user sentence. The random picker function "R" will be both
				// returned and set to the "o" variable, so if it's "undefined",
				// that's false-ish, the cycle will break - or the cycle will
				// keep going on and we'll find the selected word in the "o"
				// variable, ready to be processed.
				// So, we're picking a random word...
				R(
					// ...from TinyHAL brain at...
					R[
						// ...the "exploration set" position...
						w
					]
					// ...in the the "UP" chain.
					.u)
				;
				// As usual, the update statement of this "for" cycle is used as
				// last line of the cycle code. In this case we are going to use
				// that to add the randomly picked word "o" to the "exploration
				// set" and we'll make sure that's not longer than 4 elements.
				// So, to the "exploration set"...
				w.
					// ...we will add to its top...
					unshift(
						// ...the latest selected word.
						o
					)
					// "unshift", like "push", returns the new array length. So
					// it's the best time to check if its length is greater
					// than 4 (so, it's 5) using the "subtract and
					// short-circuit" trick we've used before. So... if
					// subtracting 5 to the new "exploration set" length...
					-5
					// ...give us a zero...
					||
					// ...then, from the "exploration set"...
					w.
						// ...remove the rightmost element, that's the older
						// of the set.
						pop()
			)
			// The function body will update the TinyHAL answer string "x",
			// prepending the latest selected word. The new TinyHAL answer will
			// be...
			x=
				// ...the lastest selected word and...
				o+
					// ...a whitespace and...
					" "+
						// ...the previous sentence.
						x;
			// We will do the same for the "DOWN" chain, so...
			for(
				// ...prepare the "exploration set"...
				w=[e]
				;
				// ...pick a random word from the "DOWN" chain...
				R(R[w].d)
				;
				// ...then, to the "exploration set"...
				w
					// ...append with "push"... (we're going to use a shorthand
					// here)
					[P](
						// ...the latest selected word...
						o
					)
					// ...and, if the returned "exploration set" length is 5...
					-5||
					// ...remove the first element of the "exploration set".
					w.shift()
			)
			// So, to the final TinyHAL answer...
			x
				// ...append...
				+=
					// ...a whitespace and the latest selected word.
					" "+o;
			// That's all! We've just to show the user our final answer in "x".
			// So, to the output HTML element...
			O[
				// ...as its "innerHTML" property (another shorthand here)
				N
			]
				// ...set...
				=
					// ...our final answer.
					x
			// ...and that's all! TinyHAL is *ALIVE*! :) Thank you for reading!
			//
			// --------------------------------------------------------[ END ]--
		})
		//
		// --------------------------------------------------------[ RULER 2 ]--
		//
		// If it's the first time you're reading this, welcome back! We've just
		// checked that the user hit "enter" in the input box, so we're ready to
		// process his sentence.
		(
			// In the following code we're going to do a lot of stuff:
			//
			// - Processing the sentence the user typed in
			// - Putting the user sentence "in the brain" of TinyHAL, that's "R"
			// - Filling up the known words "d" array
			// - Returning a list of meaningful words from the user input and...
			//   - Picking one of them randomly
			//   - If there are no meaningful words in user input, select a
			//     random word from the known words list "d" instead
			//
			// The randomly chosen word will be both set to the "x" variable,
			// that will contain the full TinyHAL answer to the user, and passed
			// to the answer-building function we left at "[ RULER 1 ]".
			// So, our first option of random word will came...
			x=R(
				// ...from the user input. We need to make an array of
				// meaningful words from the user input now. Our tasks are:
				//
				// - Processing the sentence the user typed in
				// - Putting the user sentence "in the brain" of TinyHAL "R"
				// - Filling up the known words "d" array
				// - Returning a list of meaningful words
				//
				// First of all, let's pick the text the user typed into the "I"
				// inputbox...
				I[V="value"]
				// We've also created another shorthand for the "value"
				// property. We'll use that for cleaning the "I" inputbox later.
				//
				// Then we'll make the whole sentence uppercase. It will flatten
				// its meaning a little but it makes word processings hugely
				// easier and gives that imperative machine-like feeling TinyHAL
				// needs! :)
				.toUpperCase()
				// Then we need to split the sentence words. We'll use the short
				// regular expression \W, which just splits alphanumeric and
				// not-alphanumeric sequences. The punctuation will be ignored,
				// changing the meaning of some sentences again... And that's
				// short to implement, limiting and fun! Deal!
				.split(/\W/)
				// Now we're ready to process the user sentence! First of all
				// we'll change some of his words a little. As we said before,
				// this part is missing from the "lite" version but it makes
				// TinyHAL conversations way more interesting.
				//
				// Let's do this with a "map" statement: it will pass the
				// splitted words one by one to a callback function and replace
				// it from the original array with the returned value.
				.map(e=>
					// The next statement will return the replacement word
					// when it have to be replaced or the previous one when it
					// was OK and we're going to set up a ternary for this.
					//
					// Our first condition is on the "T" flag we initialized
					// before. When "T" is false TinyHAL have to skip any
					// transformation, since it's "initializing" his brain.
					// So, we're going to process the word only when "T" is
					// true-ish.
					T&&(
						// That's the deal. We need to:
						//
						// - Swap some words, like "ME <-> YOU" and
						//   "YOU <-> ME".
						// - Change some words in just one direction, like
						//   "WHY -> BECAUSE".
						// - Remove some words from questions, like "WHAT".
						//
						// Moreover, we've to make sure that each swap is done
						// only once.
						//
						// There are a couple of ways to do that but we need
						// a very short implementation that allows a slim way to
						// describe our conversion map. I came with this idea of
						// a single string with multiple separators and a nested
						// regular expression, in order to match words and
						// extract the right replacement.
						//
						// | ME <-> YOU | WHY -> BECAUSE | WHAT -> | ...
						// 
						// That's how it works: we'll use a letter to split each
						// words pair. We'll use the lowercase "a" for that.
						// (I'll explain the reason at the end)
						// So...
						//
						// aME <-> YOUaWHY -> BECAUSEa WHAT -> a...
						//
						// Then we'll use a different word separator for each
						// conversion mode, so "b" for two-sided and "c" for
						// one-sided conversions.
						//
						// aMEbYOUaWHYcBECAUSEaWHATca...
						//
						// Finally we'll match it with a regular expression that
						// looks for the first word of each pair and returns the
						// second one, and that's for both "b" and "c" separated
						// pairs...
						//
						// a<WORD>[bc]([^a]*)a
						//
						// ...and another one that looks for the second word and
						// captures the first one of each pair, this time just
						// for the "b" separated pairs.
						//
						// a([^ab]+)b<WORD>a
						//
						// We will merge both the regular expression in a single
						// one, which shares the "a" separators:
						//
						// a(<WORD>[bc]([^a]*)|([^ab]+)b<WORD>)a
						//
						// So, if this regular expression matches a given word,
						// it returns the replacement word at the 2nd or at the
						// 3rd position of its matched values.
						//
						// So... "m", that is our regexp match results...
					  	m=
					  		// ...contains the result of our regexp...
					  		eval(`/a(${e}[bc]([^a]*)|([^ab]+)b${e})a/`)
					  		// Okay... I've not used the usual RegExp new object
					  		// creation statement but this "eval" thing does
					  		// pretty the same using less bytes.
					  		//
					  		// We're asking Javascript to evaluate a string
					  		// which contains a regular expression described
					  		// with the notation /.../, so it will create the
					  		// related RegExp object and returns that. Moreover,
					  		// we're using ES6 template literals with `` to
					  		// describe this string, sparing us some more bytes
					  		// when concatenating the word we're going to
					  		// look for...
					  		//
					  		// xx"+e+"yy -> 9 bytes
					  		// xx${e}yy  -> 8 bytes
					  		//
					  		// Then, we'll execute the regular expression on our
					  		// words map:
					  		// (Sorry... I'm going to break the 80 columns
					  		// barrier here!)
					  		.exec`aWHYcBECAUSEaWHOcaWHATcaIbYOUaMbREaMEbYOUaMYSELFbYOURSELFaMINEbYOURSaAMbAREaMYbYOURa`
					  		// Time to explain why I've used "a", "b" and "c"
					  		// as separators.
					  		//
					  		// The Javascript statement "atob" decodes a Base64
					  		// string and this Base64 string can only contain
					  		// letters and numbers. Decoded Base64 strings are
					  		// always shorter than the encoeded ones, so you
					  		// can run "atob("aWHYcBECAUSEa...")", copy its
					  		// output and replace this line with:
					  		//
					  		// .exec(btoa`<output from atob>`)
					  		//
					  		// ...sparing a little more bytes. Don't worry: 
					  		// after some tries I managed to get a sequence
					  		// of words and separators which "atob" doesn't
					  		// contain any carriage return or ` symbol.
					  		//
					  		// And that's why I used "a", "b" and "c" as
					  		// separators.
					  		//
					  		// Most of the atob results are not printable and
					  		// I don't like the way they looks. That's why this
					  		// part is not included in this sources.
					  		//
					  		// Enough talk. Lets' go! We've the regular
					  		// expression results in our "m" variable, which
					  		// will be true-ish if something matched. Our
					  		// ternary condition is over...
					)
					// ...So, if training mode is disabled and our regular
					// expression matched something...
					?
					// ...let's return the second or the third matched
					// substring...
					m[2]||m[3]
					// ...or...
					:
					// ...we'll keep the word as the user typed it.
					e
				)
				// Now we've the sentence the user typed splitted in words and
				// with few fixes. Aphostrophes, commas and other not
				// alphanumeric symbols will add empty entries to our list of
				// words, so we need to filter them out before moving on.
				//
				// We'll use the "filter" method, which sends every element of
				// an array to a callback function that will return "false"
				// when that element have to be removed.
				//
				// Luckly, empty strings are false-ish in Javascript, so a
				// "filter" call...
				[F="filter"](
					// (We've made another shorthand. We're going to use
					// "filter" again very soon.)
					// ...with a callback function that just returns the
					// argument...
					e=>e
					// ...will do the job. That returns something false-ish
					// on empty values of "e".
				)
				// Our first task is done!
				//
				// X Processing the sentence the user typed in
				// - Putting the user sentence "in the brain" of TinyHAL
				// - Filling up the known words "d" array
				// - Returning a list of meaningful words
				//
				// Yay! To the next one! Now it's the time to "learn" what the
				// user said.
				//
				// TinyHAL uses one Markovian chains that links every group of
				// 4 words to the following word and another one that links
				// the same group to the previous word, taking inspiration from
				// the original MegaHAL. Every sentence that is "added to the
				// brain" is merged with the previous brain content.
				//
				// Sentence: THE SUN IS BRIGHT TODAY.
				// Brain:
				//
				//     Words               . "UP" chain . "DOWN" chain .
				//     .................................................
				//     THE                 . (Nothing)  . SUN          .
				//     THE SUN             . (Nothing)  . IS           .
				//     THE SUN IS          . (Nothing)  . BRIGHT       .
				//     THE SUN IS BRIGHT   . (Nothing)  . TODAY        .
				//     SUN IS BRIGHT TODAY . THE        . (Nothing)    .
				//     SUN                 . THE        . IS           .
				//     SUN IS              . THE        . HOT          .
				//     ...                 . ...        . ...          .
				//
				// Sentence: THE SUN IS HOT
				// Brain:
				//
				//     Words               . "UP" chain . "DOWN" chain .
				//     .................................................
				//     THE                 . (Nothing)  . SUN, SUN     .
				//     THE SUN             . (Nothing)  . IS, IS       .
				//     THE SUN IS          . (Nothing)  . BRIGHT, HOT  .
				//     THE SUN IS BRIGHT   . (Nothing)  . TODAY        .
				//     SUN IS BRIGHT TODAY . THE        . (Nothing)    .
				//     THE SUN IS HOT      . (Nothing)  . (Nothing)    .
				//     SUN                 . THE        . IS           .
				//     SUN IS              . THE        . BRIGHT, HOT  .
				//     ...                 . ...        . ...          .
				//
				// ...and so on.
				// I'll explain how TinyHAL will use these "brain data" to give
				// his answer later. Just a tiny hint: do you remember that we
				// are going to choose a random starting word from the user
				// sentence? In the meanwhile, let's merge the filtered user
				// sentence in the brain.
				//
				// Hey. Do you remeber which tasks are left?
				//
				// - Putting the user sentence "in the brain" of TinyHAL
				// - Filling up the known words "d" array
				// - Returning a list of meaningful words
				//
				// We're going to do all of them at the same time.
				//
				// So we need to iterate all of the user sentence words again,
				// update the known words set "d", fill the TinyHAL brain "R" as
				// we explained and finally return a list of meaningful words.
				//
				// Ready? Let's filter our words list one last time. 
				[F](
					// The "filter" callback receives 3 arguments every time a
					// word is processed.
					//
					// - e: The currently processed word
					// - i: The currently processed word index in the sentence
					// - l: The processed sentence array					
					(e,i,l)=>{
						// For every iterated word, we're going to apply 4
						// changes to the TinyHAL brain "R":
						//
						// Sentence: THE SUN IS BRIGHT TODAY
						//
						// Iteration 1:
						// e=THE, i=0, l=["THE", "SUN", "IS", "BRIGHT", "TODAY"]
						//
						// Brain changes for iteration 1:
						//
						// 1) ["THE"] -> "UP chain"   +
						//            -> "DOWN chain" + "SUN"
						// 2) ["THE", "SUN"] -> "UP chain"   +
						//                   -> "DOWN chain" + "IS"
						// 3) ["THE", "SUN", "IS"] -> "UP chain"   +
						//                         -> "DOWN chain" + "BRIGHT"
						// 4) ["THE", "SUN", "IS", "BRIGHT"] -> "UP chain"   +
						//                                   -> "DOWN chain" +
						//
						// Let's prepare a "for" cycle, that will iterate the
						// 4 times we need.
						for(
							// We're going to add the processed word "e" to the
							// known words list "d" if no data about that word
							// is found in the brain. We're going to use a
							// short-circuit for that.
							// So, if the brain...
							R[
								// ...at the current word position...
								e
							]
							// ...is true-ish, skip the following code. Else...
							||
							// ...push to the known words list "d"...
							d[P="push"](
								// (We've made another shorthand!)
								// ...the current word.
								e
							)
							// ...then, time to initialize some stuff...
							,
							// We're going to set a bunch of variables to the
							// same empty array... with very different meanings.
							//
							// - An empty array is like an empty string in
							//   Javascript. We're going to use this to clear
							//   the user input box.
							// - An empty array is a 0 when used as a number.
							//   So we're using that to initialize our cycle
							//   counter.
							// - And an empty array is... an empty array. We'll
							//   use it to create the subset of words used as
							//   index for filling the TinyHAL brain.
							//
							// So, the user input...
							I[V]=
								// ...the cycle counter...
								z=
									// ...and the subset of words are set to...
									w=
										// ...the same empty array.
										[]
							// To the test expression!
							;
							// Nothing fancy here. We'll keep cycling if the
							// counter "z" is less than 4. So, 4 times.
							z<4
							// Now it's the time for the update statement.
							;
							// In code golfing the update statement is often
							// used as the last statement of the "for" cycle
							// code, in order to spare a byte.
							// As usual, we've our problem of "consecutio
							// temporum". I suggest you to read the cycle code
							// before reading the following line comments.
							//
							// -------------------------------------------------
							//
							// Once we've added the processed word into the "UP"
							// chain, we'll do the same to the "DOWN" chain. So,
							// from the current brain position...
							c
								// ...in the "DOWN" chain...
								.d
									// ..."push"... (Shorthand used here)
									[P](
										// ...the word in the sentence...
										l[
											// ...at the "i+z" position.
											// Since "z" contains the latest "w"
											// array length, "i+z" points to its
											// next word.
											//
											// [ "THE", "SUN",  "IS", "BRIGHT" ]
											//     ^              ^
											//     |              |
											//	   i              |
											// [ "THE", "SUN" ]	 i+z								
											i+z
										])
						)
						// And, finally, it comes the "for" cycle code.
						//
						// We're going to add the processed word and the next
						// 3 one by one every cycle iteration to our "w" array.
						// We'll use the "push" statement, that adds the given
						// element to the array and returns the new array
						// length - and we'll use this returned length to update
						// the cycle counter. Since our "w" array is empty at
						// the beginning, it's like counting one by one every
						// iteration.
						//
						// Initialize : z = [] -> 0
						//              w = []
						// Iteration 1: z = w.push(...) -> 0 + 1 = 1
						//            : w = [...]
						// Iteration 2: z = w.push(...) -> 1 + 1 = 2
						//            : w = [...,...]
						// Iteration 3: z = w.push(...) -> 2 + 1 = 3
						//            : w = [...,...,...]
						// Iteration 4: z = w.push(...) -> 3 + 1 = 4
						//            : w = [...,...,...,...]
						//
						// So, the cycle counter is set to...
						z=
							// ...the length of the "w" array after pushing the
							// value...
							w[P](
								// ...that's in the "l" array... (remember? it's
								// the third argument of the "filter" callback
								// we're into right now and contains all the
								// sentence words)
								l[
									// ...At the position "i+z". Since "i" is
									// the index of the currently processed word
									// and "z" is set to an empty array (that's
									// equal to the number 0) "i+z" is equal to
									// "i" in the first iteration.
									// Since "z" is increased every cycle, "i+z"
									// will catch the currently processed word
									// and the following 3 words.
									//
									// Sentence: THE SUN IS BRIGHT TODAY
									//            |   |   |    |
									// i=0, z=[] _/   |   |    |
									// w = ["THE"]    |   |    |
									//                |   |    |
									// i=0, z=1  _____/   |    |
									// w = ["THE","SUN"]  |    |
									//                    |    |
									// i=0, z=2  _________/    |
									// w = ["THE","SUN","IS"]  |
									//                         |
									// i=0, z=3  ______________/
									// w = ["THE","SUN","IS","BRIGHT"]
									//
									// The next "filter" iteration, "i" will be
									// 1, so the taken words will be shifted by
									// one.
									//
									// Sentence: THE SUN IS BRIGHT TODAY
									//                |   |   |      |
									// i=1, z=[] _____/   |   |      |
									// w = ["SUN"]        |   |      |
									//                    |   |      |
									// i=1, z=1  _________/   |      |
									// w = ["SUN","IS"]       |      |
									//                        |      |
									// i=1, z=2  _____________/      |
									// w = ["SUN","IS","BRIGHT"]     |
									//                               |
									// i=1, z=3  ____________________/
									// w = ["SUN","IS","BRIGHT","TODAY"]
									i+z
								]
							)
						,								
						// Then we've to create an empty node in our double
						// Markovian chain/brain if we're processing a new
						// subset of words.
						//
						// We also need a shorthand to the current Markovian
						// chain node: we are going to use it another time
						// later. As usual, let's try doing everything at the
						// same time.
						//
						// Our shorthand variable "c"...
						c=
							// ...is set to the place in the TinyHAL brain...
							R[
								// ...at the subset of words we're processing...
								w
								// Okay, I know. I'm using an array of strings
								// as array index and that's not so
								// straightforward. In Javascript, when an array
								// is used as a string, it is turned into a
								// comma separated one.
								// That's too good to be true, isn't it?
								//
								// w = ["SUN","IS","BRIGHT","TODAY"]
								// R[w] = R["SUN,IS,BRIGHT,TODAY"]
								//
								// Anyway...
							]=
								// ...we're setting "c" and "R[w]" to "R[W]"
								// himself...
								R[w]||
								// ...or, if it wasn't defined yet, to a brand
								// new node of our double Markovian chain.
								{
									// The double chain is described by a single
									// object with two attributes. One for the
									// "UP" chain...
									u:
										// ...that contains the array with the
										// previous possible word of each subset
										// of words "w"...
										[],
									// ...and the "DOWN" chain, that does the
									// same for the following possible words.
									d:[]
								}
						,
						// Now, from the current brain position...
						c.
							// ...in the "UP" chain...
							u
								// ...let's push... (Using the shorthand now)
								[P](
									// The previous word of the currently
									// fetched one.
									l[i-1]
								)
						// Our "for" loop is over but there is one last
						// statement to do in  the update part. It will update
						// the "DOWN" chain in the same way we've just done for
						// the "UP" chain. You can go back and read that last
						// line or...
					;
					// ...that's all. But before leaving we've just one task
					// left:
					//
					// - Returning a list of meaningful words
					//
					// So how we can tell to the "filter" we're into to skip
					// "non meaningful" words... without a wordlist? Well...
					// We will consider "not meaningful" the words that are
					// shorter than 3 letters. Not very true but just enough for
					// TinyHAL.
					//
					// We'll check the condition returning the word third
					// letter: a missing letter is false-ish to Javascript and
					// this will instruct the "filter" we're into to skip that
					// word.
					//
					// This letter checking approach uses a little less bytes
					// than using the usual "length" approach.
					//
					// return e.length>2 -> 17 bytes
					// return e[2]       -> 11 bytes
					return e[2]
				}
			// We've just completed our tasks!
			//
			// X Putting the user sentence "in the brain" of TinyHAL
			// X Filling up the known words "d" array
			// X Returning a list of meaningful words
			//
			// The last "filter" statement returned an array with just the
			// meaningful words and...
			)
		// ...the random picker function "R" will pick one of them
		// randomly...
		)
		// ...unless our user meaningful words array is empty. If this array has
		// been completely filtered out, the just called random picker "R" will
		// return "undefined", that's false-ish. We need something to say anyway
		// and we're going to do that picking a random word from the ones
		// TintHAL learned since now. We'll short-circuit a second random
		// selector with a "logic OR" function to the previous one...
		||
		// So, if no meaningful word can be extracted from user input, another
		// random word is drawn...
		R(
			// ...from the list of all the words TinyHAL knows.
			d
		)
		// That's all. Now we should have a good starting word for TinyHAL
		// answer to the user.
		// This word is passed to the next half of TinyHAL, which is a function
		// that prepares the rest of the answer and show that to the user.
		//
		// Just go back up to the "RULER 1" and keep reading!
	)