const INPUT = `
BBBFBFFRLL
FBBBBBFRRR
FBFFBBBRLR
FBBFBFBRLR
BBFBBFBLRL
BBFBFBBLLL
BBBBFFFRLL
FBBFFFBRRL
BFBFFBBRLL
BFFBFBBRLL
BBFFFBFRLR
FFBFBBBRRL
BBFFBFFLRL
FFBBBFFRLR
BFFFBFFRRL
BBFBFFFRRL
FBBFFFFRLL
FBBFFFBLRL
FBFFFFFRRR
FBBBFBFRLR
BFFBFFFRLR
BFBBBBFLLR
BBBBFFBLLR
FFFBBFFRRL
BBFBBFBLLL
BFBFBFBLRL
FFBBBFBLLR
FFFBFBFLRL
FBFBFBFLLL
FBBBFFBLLR
FBFBBFBLLR
FFFBFFFRLR
BFBBBFFRRL
FBFBBBBRLL
FBFFBFFLLR
BFFFFBFRLL
BFFBBFFRLL
FFBFBFFLLL
FFBBFFBRRR
BFFBBFBLLL
BBFBFBFLRL
BFBFFBFLRR
BFBBBFBRLL
FBBFFFFRRL
FFFBBBFLLL
FFBBBBFLLR
BBFBBFFRRL
BBFBBBFLLR
BBBFBFBLRR
BBFFFFFLRR
BFFBFFBLLR
FFFBFBFRLL
FBBBBFFRLR
BFBBBFFRRR
FBFFFFFRLR
BBFBBFFLRL
BBFFBFFLLR
FFBBBFBLRR
BBFBFBFRLR
FBBBFFFRLR
FFBFFFFLLL
FFBBFFBLLL
BBBFFBBRLL
BFFFFFBRLR
BBBFBFBLLL
FBFFFFFLLR
FBFFFFFLLL
FBBFBBBLRR
BBBFBFFRRL
FFBBFFBLRR
BBFBFBBRLL
BFBBFBBRLL
FFFBFFBRRR
BBBFBFBRRL
BFFBBFBRRL
BBFBFFBLLR
FFFBBFBLRR
BBFFBBFRLR
FBFBBFFRRL
FFBFBBFLLR
FBFFBBFRLR
FFBFBBFRLL
FFBFBFBRLR
BFFFBBFLRL
FFBBBBBLLR
FBFBBFBRLR
BBFFFFFLLL
BFBFBFFLRL
BBFFBBBLRR
FBFFBBFRLL
FBFBFFFLLL
BFFFFBBRLL
BFBBFBBRLR
FFBFFBFLLR
BBFFBFBRLL
FBFBFFBLLR
BBFBFFFLRR
FFFBBFFLLL
FFFBFFFRRR
FBBFBFFLRR
FBFFFFBRRL
BBFFBFFRRL
FBBFBBBRLR
BFFBBBFLLL
BFFFBFFLLL
BBFFFFBLLL
BFBFBFFRRL
FBFBBFFLLR
FBFFBBFLRR
BBFBFFBRRL
FFBFBFBLLL
FBFBBFFLRR
BBBFFFBLLL
FFFBBFFLLR
FBBBBBFRLL
BFFFFBFLLR
FFFBFFBRLR
BFBBBBBRLL
FBFBBBBRRR
FFBFBFBLRR
FBBBFBFLRL
BFBFFBBRLR
BFBFFBBLLR
BFFFFBBLRL
FFFBBBBLRR
FFBBFBBRRR
BFBBBFBRRL
BBFFBBFRLL
BFBFBBBLRR
FBBFBBFLRR
FFBFFBFRLR
FBFBFBFLRR
BBFFFFBRRL
FBFFFFBLLR
FBFFFBFLLL
FFBBBFFLRL
FBBBFBFLLR
FBFBBFFLLL
FFBFFBFRLL
BFBFBBFLRR
FBFBBFFRLL
BFBBBBFRRL
BBBFBFBLRL
FBBFBBBLRL
FFBBFFBLRL
BFBBBBBLLR
BBFFBBFLLL
FFFBBFBRLL
FFBBFBBRLR
FBBFFFBLLL
BFBBFBFLLL
BBFBFFBLRR
BBBFFFFLRL
BFFBBFFLLR
FBFBFFBLRL
BBFBFBBRRL
BFBFBBFLLL
BFBBFFBRLR
BFFFBFBRLR
FFBBBBFLRR
FFBFBFBRRR
BFFFFBBRRL
FFBBFBFRRL
FBFFFBFRLR
BFFFBFBRRR
FBFBFFBRRL
BBFFBBBRLL
FBBBBFBRLR
BFFFFFBRRL
FFBFBFBRRL
FFFBBFFRLL
BBBFFBBLRL
BBFBBBBRRR
FBFBBBFRLR
BFBFFFFRLL
FFFBFBBLLL
BBFFFBBRRR
FFBFBBBLLL
BFFFFFBRRR
BFFFBFBLRR
FBBFBFBRRL
BBBFBBFRRR
BFFFFFBRLL
FBBBBBBLRL
BBBFBFFLLR
FFBBFFFLRL
FBBFBBFRLR
BFFFBFBLLR
BFBFBBBLLL
FBBBFFBRRR
BBBFFBBLRR
BFBFBBBRRL
FFBBBBBRLR
BFFFBBBLRL
BFBBFBFRRL
FFBFBFFLLR
BBFBBFFLLL
BBBFBBBRRR
BBBFFBFLLL
BFBFBBFLRL
BFBBFFFLRL
BBFFFBBRLL
FBFBFBBLLR
BFBFBBFRLR
FBFFBFBRRR
BFBBBFBLLL
FFBBFBBLLL
BBFFFBFLLL
BBFBBFFRLR
BBFFBFBRRR
BFBFFFBLRR
FBBFBBBRLL
FBBFFFFLRR
BBFFBFFRLL
BBBBFFFRLR
FFBFFBBLRR
FFBFFFBRRL
FBBBFBBLRL
FFBBBBBRRL
FBFFBFBRLL
BBFFFFBLRR
BFBFFFBRRL
BBBBFFBLLL
BFFBBBFLRL
BBBFFBFRRR
FFBFFFFLLR
BFFFFBBRLR
BBFFFBFRRR
BBFBFBBRRR
FBBBBBFLRL
FBBFBFFLLL
FFBFBBBLRR
BFFBBFBRLL
BBFBFFBLLL
FFFBFFBLRR
FBBBBFBLRR
BBBFBBBRLL
FFFBFBBLLR
FFBBBFBRLR
BFFFBFBLLL
FBBBFFBLLL
BBBFFFFRRL
FBFFFBBLLR
FFBFFBFLRR
BFFBFFBLRL
FFFBFFFRLL
FBBBBBFLLR
FBBBBFFLLR
BFBFFBBLRL
BBBFFFFLLL
FBBFFFBLLR
FBFFBFFRLL
BBFBBBBLRR
FBBBFBBLLR
BBFFBFBLLR
BBFFBBFRRL
FBFFFBFRRR
BFBFBBBRRR
FBBFFFFRRR
BFFBBFBLRR
FFBFBBFRRR
FBFFBFFRLR
BFFFBFBLRL
BBBFBFFLRR
BFBBFBBLRL
BBFBBBBRRL
FFFBBBFRRR
BBBFFBFLRL
FFFBBFBRRR
BFBFFBFLLL
FFFBFFFRRL
BFBBBBFRLL
BFFBFFFLRL
FFFBBFBRRL
BFFBFBFRLL
BBBFFBFRLR
BBBFBBBLRL
BBBFFBFRRL
FBBBFFFLLR
BFBBFFBLLR
BFBFFFBLLR
FBBBFBBRLL
BBFBFFBRLR
BFFFFBBLLR
BBFBBFBLLR
FBBFFBFLRL
FBFBFFFLLR
BFFBFBFRRR
BBBFFFBLRL
BBFFFBFRLL
FFFBFBFLRR
BBFBFBBLRR
FBBBFBFRLL
FBBFBBFLRL
BFFBFFFRRR
BBBFFFFRRR
FFBFBBFRLR
BFBBFBBLLR
FBBFBFBLLR
FFFBFFBLLR
FBBFFFBRLR
FBFBBFBLRL
BFFFBFFLRL
BFFFBBFLLL
FFBBBBBRLL
FBFFBFBLLR
FFBBFBFLLL
BFBFBBBLRL
FFBFFFFRLL
FFBFBBBLRL
BFBBBBBLLL
BFBBBFBLLR
FFBFBBBRRR
BFFBBBFRRL
FFBBFFBLLR
FFBBBBFRRL
BFBFBFBRLR
BFFFBBBRRL
BFBBFBFRLL
BFFFFFFLRL
BFBFBBFRRR
BBFBFFBRRR
BBFFFBFLRR
FBBFFFFLRL
FFFBFBFLLL
FBFBFBFRRR
BFFBFBBLRL
FFBFFFFRLR
BFBFFFFRRL
BFBBFFFRLR
BFFFFFFRLR
FBBBFFFRRR
FFBFBFFRLR
FBFFBFBLLL
BBBFBBBLLR
FBBFFFBRLL
FFFBFBBRRL
FBBBBFFLLL
FBBBBFBLRL
BBFBBBFRLL
FFBFBFBRLL
FFBFFBBLLL
BFBFBFBRRR
FBFFBBFLLL
BBFBFFFLRL
BBBFBBFRLL
BBFBBBFRRL
BBBFBBFLRL
BBFBBFFLLR
FFBFFFFLRR
BBBFBFFLLL
BFBBFBBLRR
FFFBBFBRLR
BBBFFBBRLR
BFBBBBFLRR
FBFBBBBLLL
BFBFFFFRLR
BFBFFFBRLR
FBBFFBFRLR
FBFFFBFLLR
BFBBFFBRRL
BBBFBBFRRL
FBBFBBFRRR
FFBFFFBRLL
BBFBFFFRRR
FFBFBBFLRL
FFBBFFBRLL
FBBFFFBLRR
FBBFFFBRRR
FBBBBBBLRR
FBFFFFBLLL
FBFFBBBLLR
FBBFFBBRRL
FBFFFBBRLR
FFBBBBFRLL
FBBFFFFLLL
BBBFFFBLLR
BBBFBBBLLL
BFBBFFBLLL
BBBFBBFLLL
FBBFFBFLLR
FBBFFBFRRR
FBBFFBBLRR
FFFBFBBRLL
FFBBFFFLLL
FBBBBFBRRL
FBBBBBBLLL
FFBBBBBLLL
FBFBBBBLRR
BFBFFFBLLL
BFFFBBFRRL
BFBFBFFRLL
FBBFFBBLRL
FBBFBBBLLL
FFFBBFFLRL
FFBFBFFLRR
FFFBBFBLRL
FFBFBFFRRR
FFBBFBBLRL
FFFBBBFLRL
FFBFFFBLLL
BFBBBFFRLL
BBBBFFFLRL
FBFBBBBLLR
BFFFBBFRRR
BBFFFFBRLR
BBFFBBBLRL
FBBBBBFRLR
BFFFFBBLLL
FBFFBFBLRL
FFFBFFBRLL
FBBBFBFRRL
BFBFFFFLLL
BBBFFBFLLR
BFBFBBFLLR
BFBFFBFLLR
BBFFBBBLLL
BFBFBBBRLL
BBFBBFBRRL
FBBFFBFLRR
FFBBBBFRLR
BFBBFFBLRL
FFBBBFBLLL
FBBFFBFRRL
BFBBFBFLRR
BFFBBBBRRR
BFFBBBFLLR
BFBFFBFRLR
BFFBBBFRLR
BBBFFBBRRL
BFBBBBFLLL
BFFBBFBLRL
FFBBFBBRLL
FBFFBFBLRR
FBBFFFFLLR
FBBFFBBRLL
FFFBBFBLLR
BBBFFFBRLR
BBFFBFFRLR
BFBFFBBRRR
BFBBBFBLRR
FFBFFBBRLR
BFBBFBBLLL
FBFBBBBRLR
BFBFBBFRLL
BFFFBFFLRR
FFFBBBFRLR
FBFBBFBLLL
FBFBFBFRLR
FBFBBBFLLR
FBFFFBFLRL
BBFBFFFRLL
BBBBFFFRRL
BFFFFBFLLL
FBFFBFFRRL
FFFBFBBLRL
BFFBFFBRRR
BFFBFFFRRL
BBFFBBFLLR
FFBBFBFLLR
BFBBBBBLRL
BFBFFBBLRR
BBFFFBBLRL
BFFBBBFRRR
BFBFBFFLLR
FBBBBFFLRL
BFBBBFFLRL
BFFBBFFRLR
BBBBFFBLRL
FBFFFBBLRR
FBFBFBBRLR
FFBBBFBRLL
BFFBFFBRLL
BFFFBBFRLR
FFBBBFBRRR
FBFBBBBLRL
FBFFBBFRRL
FFFBFBBRRR
BBBFFFFLRR
FBBBFBBRRL
BBFBFBBRLR
FFBBBFFRRL
BBFFFFBRLL
BBFBFFBRLL
BBBFFBBLLL
FBFFFBFRLL
BFBBFFFRLL
BBFBBBFLRL
FBFFFFFLRL
BFFBBFFRRR
BFFFBBBLLR
FBFBFBBLLL
FBFBBFFRLR
FFFBFBBRLR
BBFFBBFLRR
BFFFBBFRLL
BFFBBBBRLL
FFBBBBFLLL
BBBFBBFLRR
FBFFBBBLLL
BBBFBFBRLL
BFBFFFBRRR
BBFFFFFRLR
BBFBBFFRRR
FBFFFFBRLR
FFBBBFFLLR
BFFBFBFLLR
BBFFFBFLRL
BFFFFBFLRL
FBBFBFBLLL
BFFBBBBLRR
FBBFBFFRLR
FBFFFFBLRL
FBFBFFFRRR
BFFFBBFLRR
FFBFBBFRRL
BFFFFBBRRR
FBBBBBBRLL
FBFFFBFRRL
BFBBFFBRRR
FBBBBFBLLR
BFBBBBBRRR
FFBBFBFRRR
BBFBFBFLRR
FBFFFBBRRL
FBFFBBBRLL
FBFBFFFRLL
BBFBBBFLLL
BFBBBFFLRR
BBBFBFFRRR
BBBFBBFRLR
FBBFBFFRRL
BBBFFFFRLL
BFFFFFFRRL
BBFFFFBLLR
FFBFBBBRLR
FFBFFBBRLL
BBBFFFBRLL
BBBFBFFLRL
FBFBBBFRRL
FFFBBFFRLR
BFBFBBBRLR
BBBBFFFLLR
FBFFBFBRRL
FBBFBFBLRR
BFBFBFFLLL
FFBBFFFLRR
BBBFBFBRLR
FFFBBFBLLL
BFFBFFBRLR
FBBFBBBRRR
BBBFFBFRLL
FFBBBBBRRR
BFFBFFBRRL
BBFFBFBLLL
FBBFFBFRLL
FFBFFFFRRR
FBBFBBFLLR
BFBBFFBRLL
BFFFBFFRLR
BBFFFFBRRR
BBFFBFFLRR
FFBFBBFLLL
FFBBBFFRRR
BFFFFBFRRL
FBFBBBFRRR
BFBBBBBLRR
BFFBFFFLLL
BFFFBBBRLL
FBBFBFFLRL
FBBFFBBLLR
BFBFBBFRRL
FFBBFFFRRR
FBBBFBBLRR
FBFBBFBRRR
BBFFFBBRRL
BFBFFFFLRR
FFFBFBFRRL
BBBFBBBRLR
FFBBFBFRLR
FBBBBFBRRR
FFBFFFFRRL
FBFBFBFLLR
BFFBBFFLLL
FBFFFBBRRR
BBBFFFFRLR
FFBBFFBRRL
FFBBFBFRLL
BFFFBFFLLR
FBFFFFBRRR
FBFFBBBLRL
FBFBFFFRLR
FBBBBFFRRL
BFBBBFFLLL
BBBBFFFLLL
FBBBFFBRRL
FBFFBBBRRR
BFFFFBFRRR
BFFFBFFRRR
BBFBBFBRLR
BFFFFFBLLL
BBBFBFBRRR
BFFBBFBRLR
FBBBBFBRLL
BFFFFFFLLL
FFFBBBFRLL
FBFBBFFRRR
FFFBBBBRRR
BBFFBBBLLR
BBFFFBFRRL
BFBFFFBRLL
BFBFFFFLRL
FBFFBBFLLR
FBBBBFFRRR
BBFBBBBLLR
BFFBBBBLRL
FFFBBBBLRL
FFBBFBFLRR
BFFBBBBRRL
FBFBFFFLRR
FBFFBBFRRR
BBFBFBFRRR
FBFBFBBRRR
FBBFBFFRLL
FFBFFBFLLL
FFBFBFFLRL
BFFFFBBLRR
FBBBFBFRRR
BFBBFBFLRL
FFBFFFBLRR
BBBFFBBLLR
BBFBBBFRRR
FFBBFBBRRL
FBBBFBFLRR
FFBBBBFLRL
BBFFFFFRLL
FBBFFBBLLL
BFFBBBBRLR
BBFBFBFRLL
FFBBBFFLRR
FFFBBBFRRL
BFFBFFFRLL
FFFBFFBLRL
BFBBFFFLRR
FFBBFBBLLR
FBBBFFBRLL
FBFBFFBRLL
FBFFFFFRLL
BBFFFBBRLR
FBFFBFFLRL
BBFBFBFLLL
FBFFBFFLLL
FBBFBFFRRR
BFFFFFFRRR
FBFBFFFLRL
BFFBFBFLLL
BBBFBBBRRL
BFBFFBBLLL
FBFFFFBRLL
BBFBBFFLRR
FBFFFBBRLL
FBFBFFBRRR
FBFBBBFLRR
FBBBBFBLLL
BFBBBFBLRL
BFBBBFBRRR
BFBBBBFLRL
FFBFFBBRRR
BFBBBFFLLR
BBFBFBFRRL
FFBFFBFRRR
BFFBBFFLRR
BFBFBFBLLR
FBBFBBFRLL
FBBBFBBRLR
FFBFBFFRLL
FFFBBFFRRR
BFBBFBFRLR
FFBBBBBLRR
FBBFFFFRLR
BFFBBBBLLR
BBFFBBBRRR
FFBFFFBRRR
FBFBFBFLRL
BFFFFBFLRR
FFFBBBFLLR
FFFBBBBRRL
FFBBFFFRLL
BFFFBBBLLL
BFFFFFBLRR
BFBFFBFRLL
FBFBFBBLRR
FFBFBFBLRL
FBBFBFBLRL
BFFBBFBLLR
BBBFFFBLRR
BFFFFFFLRR
BBBFFFBRRR
BBFBBBFLRR
BFBBBBBRLR
FBFBFBBRLL
BFFBFBFLRL
FFBBFFFRRL
BFBFBFBLRR
BFBFFFFLLR
FFBBFFFRLR
BFFFBFFRLL
FFBBFFBRLR
FFBFFFFLRL
BFFBFFBLLL
FBFBBBBRRL
FBBBFFBLRR
FFBFFBBRRL
FFBFBFFRRL
BBFBFBBLRL
FFBFBBBLLR
BBFBBBBLLL
BBBFBFBLLR
FBFFFFFRRL
BFBBFFFRRR
FBBBBFFLRR
FFFBFFBRRL
BFBFFBFLRL
FBBFFBBRRR
FBFBFFBLRR
FFFBBFFLRR
BFFBBFFRRL
FBBBFFFLRL
FBFFFBBLRL
BBFFBBFRRR
FBFFFBFLRR
BFFBFFFLRR
FBBBBBBRRL
FFBFFFBRLR
FBBFBFBRRR
BFBBBBBRRL
FBFBFBBLRL
FBFBFFBRLR
BFBBFBBRRR
BBFFBFFRRR
FBBBFFBRLR
FBFFBFFLRR
BFFFFBFRLR
BFBFFFBLRL
BFBFFBBRRL
BBFBBBBRLR
BFBFBFFRLR
BFBFFBFRRR
FBBBFFFLRR
BFBBFFFLLL
FFBFBFBLLR
FFFBFBFRRR
FBBFBBFRRL
FBFBBFBLRR
BFFFBBBLRR
FBBBBBFLRR
BFBFFBFRRL
FBBBBBFLLL
BFFBFBFRLR
FFFBBBFLRR
BFBBFBBRRL
FFBFFFBLLR
FBBBFFFRLL
BFFFBFBRRL
FBBFBFBRLL
BBBFBBBLRR
BFBFBFFLRR
BFFBBFBRRR
FBFBFBBRRL
FBFFBFFRRR
BFFBBFFLRL
FBFBFBFRRL
FFFBBBBRLR
BBFBBBBRLL
FFBBFFFLLR
BBFBBFBRLL
FBBFBBBRRL
FFBFFFBLRL
BBFBBBBLRL
FFBBBFBLRL
FBBBBBBRLR
BFFBFBFLRR
FFBFFBBLLR
BBBBFFFRRR
BFFFBFBRLL
FFBFFBBLRL
FBFBFBFRLL
FBBBBBFRRL
FFFBFFBLLL
BBFFBBFLRL
BBFBFBBLLR
BBFBFFFLLR
FFBFFBFLRL
BFBFFFFRRR
BFFBFBBLRR
BFBBBFBRLR
FBBFBBBLLR
FFBFBBFLRR
FBBBFFFLLL
FBFBBBFLLL
FBBBFBFLLL
BBFBFFFRLR
FBFBBFBRRL
FBFBBBFLRL
FFFBBBBLLL
BFFFBBBRRR
FBBBBBBLLR
BBFFFFFRRL
FFFBBBBRLL
BBFFFFFLLR
FFBBFBFLRL
BFFFBBBRLR
BBFFFBBLRR
BBBFBBFLLR
FBFBFFBLLL
BFFBFBBRRL
BFFBFBBRLR
BFFFFFBLLR
FBBBFFBLRL
FBFFBFBRLR
BBFFBFBRRL
FFBBFBBLRR
BFBFBBBLLR
FBFBBBFRLL
FBBFBFFLLR
BBFFFBBLLR
BBFBFFFLLL
FBBBFBBLLL
BBFBBFBRRR
BBFFFBBLLL
BBFBBFBLRR
BBFFFBFLLR
BFFBFBBLLL
FFBFFBFRRL
BFBBBFFRLR
BFBBFFFRRL
BFBFBFFRRR
FBBBFFFRRL
BFBFBFBRRL
FBBFFBBRLR
BFBBFBFRRR
BBFFBFBLRR
FBBBBFFRLL
BBFFFFFLRL
FFBBBBFRRR
BFFBBBFLRR
FFBBBBBLRL
FBFBBFFLRL
FBFFBBFLRL
BBBFBFFRLR
BBBFFFFLLR
FFBBBFBRRL
BBBFFFBRRL
FBFFFBBLLL
FFBFBBBRLL
FBBFBBFLLL
BFFFFFFLLR
BFBBFFFLLR
FFBBBFFRLL
BBFFBFBLRL
BBFFFFBLRL
BFFBFBFRRL
BBBFFBBRRR
BFBFBFBRLL
BBFBBFFRLL
BFFBFBBRRR
FBFBBFBRLL
BFFFBBFLLR
BBBFFBFLRR
BBFFBBBRRL
BBFFFFFRRR
FFFBFBBLRR
FBBBFBBRRR
BFFBFBBLLR
BFBFBFBLLL
BBFBFBFLLR
BFBBFFBLRR
BBFBBBFRLR
BBFBFFBLRL
BBBBFFFLRR
FBFFBBBRRL
FFBBBFFLLL
FBBBBBBRRR
FFFBBBBLLR
FFFBFBFLLR
BFFFFFBLRL
BFFBBBBLLL
BFBBBBFRRR
BFBBBBFRLR
FFFBFBFRLR
BFBBFBFLLR
BFFBFFFLLR
BFFFFFFRLL
BFFBBBFRLL
FBFFBBBLRR
BBFFBBBRLR
FBFFFFFLRR
BBFFBFFLLL
FBFFFFBLRR
BBFFBFBRLR
FBFBFFFRRL
FBBFFBFLLL
`.split('\n').filter(Boolean)

module.exports = {
  INPUT,
}
