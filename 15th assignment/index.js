/* Assignment No. 15
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list. */
var Guest_list = ['Zia Khan', 'Daniyal Nagori', 'Okasha Aijaz', 'Ameen Alam', 'Hamza Syed'];
for (var i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ', \n\n It is our pleasure to invite you in our party.\n \n Thank You!');
}
var absent_guest = "Daniyal Nagori";
var new_guest = "Kamran Tessori";
Guest_list[0] = new_guest;
for (var i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ', \n\n It is our pleasure to invite you in our party.\n \n Thank You!');
}
console.log("Mr. ".concat(absent_guest, " is not coming."));
