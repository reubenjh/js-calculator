Create a table called entries;
And a number called total;

Add an eventlistener to every button, with a function which says:

val = the text of the button that was pressed. 

if val is a number or a decimal point, 
	append to temp
	and display it in the #answer input
else if val is AC
	clear entries
	clear temp
	reset total to 0
	display zero in #answer
else if val is CE
	clear temp
	clear #answer
else if val is 'x' or '%'
	add temp to entries
	push '*' or '/' to entries
	clear temp
else if val is '='
	push temp to entries
	declare nt to be first entry.
	starting at the second entry, and every second entry after that
		declare nextnum is the next entry after the current one, converted to a number
		declare symbol is the current entry
		take nt and add/subtract/multiply/divide with nextnum

	if nt is negative, change it to nt&-

	set #answer to nt, clear entries and temp.

else 
	push temp (which is an arithemtical operation) to entries
	push val to entries.

	

