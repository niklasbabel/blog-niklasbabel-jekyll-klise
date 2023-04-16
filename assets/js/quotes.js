function updateQuote() {
    var quotes = [{
					text: "'Whether You Believe You Can, Or You Can't, You Are Right.' - Henry Ford",
				}, {
					text: "'Some days it's about just making it through your routine, and some days it's about making it clean.' - Samantha Sendel",
				}, {
					text: "'The chances of us being alive is so fucking slim, that to not to go for that life to the fullest, just makes no sense.' - The Art of Lifestyle",
				},
				{
					text: "'When opportunity knocks, make sure your door is not locked.' - Unknown",
				},
				{
					text: "'Afraid to die having never lived.' - Storm Freerun",
				}, {
					text: "'Mondays are fine. It's just your life that sucks.' - Twitter",
				}, {
					text: "'If you can't describe what you're doing as a process, you don't know what you are doing.' - William Edwards Deming",
                },
                          {
					text: "'Bodies at rest will remain at rest unless moved by an outside force.' - Newton's Laws of Motion.",
                },
                          {
                            text: "'Stay cool, hang loose, admit nothing - 'cause otherwise you are going to jail.' - Cara Delevingne",
					}, {
						text: "'Be confident, even if you are not.' - Cara Delevingne",
					},
					{
						text: "'Be careful! - Careful? Tried that once. - Ever so dull.' - Dr. Who",
					},
					{
						text: "'A superior pilot uses his superior judgment to avoid situations which require the use of his superior skills.' - Frank Borman, Apollo 8",
					},
					{
						text: "'Sometimes, by holding on too tight, you end up losing what you were trying so hard to save. Soap is a prime example.' - Samantha Sendel",
					},
					{
						text: "'Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple. But it’s worth it in the end because once you get there, you can move mountains.' - Steve Jobs",
					},
					{
						text: "'If you already know it's going to work, it's not an experiment, and only through experimentation can you get real invention. The most important inventions come from trial and error with lots of failure, and the failure is critical, and it's also embarrassing.' - Jeff Bezos",
					},
					{
						text: "'Failure is critical for innovation to happen.' - Jeff Bezos",
					},
					{
						text: "'Time is very slow for those who wait. Very fast for those who are scared. Very long for those who lament. Very short for those who celebrate - But for those who love time is eternal.' - William Shakespeare",
					},
					{
						text: "'I had to run away in order to understand the value of what it meant to stay.' - Danielle Doby",
					},
					{
						text: "'Don't let someone be a priority when all you are to them is an option.' - Jay Shetty",
					},
				];

                var quote = quotes[Math.floor(Math.random() * quotes.length)];
                document.getElementById("quote").innerHTML = "<p>" + quote.text + "</p>";
              }
              
              document.addEventListener("DOMContentLoaded", function () {
                updateQuote();
              });