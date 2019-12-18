const bwunniesSpan = document.getElementById("bwunnies");

// Did you really think I would write smart code for this ?
const bwunniesStrings = [
    "<span class='highlightCharacter'>b</span>wunnies",
    "b<span class='highlightCharacter'>w</span>unnies",
    "bw<span class='highlightCharacter'>u</span>nnies",
    "bwu<span class='highlightCharacter'>n</span>nies",
    "bwun<span class='highlightCharacter'>n</span>ies",
    "bwunn<span class='highlightCharacter'>i</span>es",
    "bwunni<span class='highlightCharacter'>e</span>s",
    "bwunnie<span class='highlightCharacter'>s</span>",
];

const UpdateBwunniesString = (nextBwunniesStringIndex) => {
    bwunniesSpan.innerHTML = bwunniesStrings[nextBwunniesStringIndex];
    nextBwunniesStringIndex = (nextBwunniesStringIndex + 1) % 8;
    setTimeout(() => UpdateBwunniesString(nextBwunniesStringIndex), 280);
};

UpdateBwunniesString(0);
