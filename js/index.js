const bwunniesSpan = document.getElementById("bwunnies");
const pinkWithStripesSpan = document.getElementById("pink-with-stripes");

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

const BuildPinkWithStripesStyle = () => {
    const text = pinkWithStripesSpan.textContent;
    let styledSpan = "";
    for (let i = 0; i < text.length; i++)
        styledSpan += `<span class="${i % 2 === 0 ? 'inner-pink' : 'inner-light-pink'}">${text.charAt(i)}</span>`;
    pinkWithStripesSpan.innerHTML = styledSpan;
};

UpdateBwunniesString(0);
BuildPinkWithStripesStyle();
