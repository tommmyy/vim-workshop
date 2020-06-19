# Vim - cool moves

## Tomáš Konrády

- [@konnnyy](https://twitter.com/konnnyy)
- [konrady.cz](https://konrady.cz)

---

https://i.pinimg.com/originals/4a/90/4d/4a904d967b26a89fe6773c93c501cce5.jpg

---

# Setup

- capslock
- MacOS - keystrokes speed - High or Low?

---

# Opening the Vim

---

# Normal Mode

---

## Good bye to arrows and `wasd`

- `hjkl`
- arrow keys -> bind to `noop`

---

## Words, words, words...

- `wW`
- `bB`
- `eE`

---

## Numbers

- number -> 4w

---

## Line movement

- ^ _ 0
- $ g_

---

## Screen movement

- `gg`, G, <num>G
- `}` `{`
- `C-d`, `C-u`
- `H(igh)` `M(iddle)` `L(ow)`
- `<num>{j|k}` - relative line-numbering
- Cursor: `zt`, `zz`, `zb`

---

# First editation moves

---

- `x`
- `p`
- Konráyd

---

## Shortcuts as a functions

- function + object
- `dw`
- `D`, `dd`
- `diw`
- `di{`
- `da)`, or `da(`
- `dit`

---

# Insert mode

---

- `i`
- `a`
- `s`
- `c`
- `A`
- `I`
- `o`, `<shift-o>`

---

# Horizontal movement

---

- `tT`
- `fF`
- `;,`
- `ctrl-i / ctrl-o`

---

# Command mode

---

- :w, :q, :q!, :bw
- :100
- /search
- %s/foo/bar/g - `*`
- ?s/foo/bar/g - `#`

- Example: zoe - extracting a function

---

- `!`

`./example-exclamation.txt`

---

# Visual mode

---

## Basics

`./example-vmode-basics.js`

- `v`, `V`, `<C-v>`
- `o` - toggle free end of selection
- `gv` - **in normal mode reselects last visual selection**
- `U` - uppercase the selection
- `u` - lowercase
- `~` - toggle case
- `Vr-` - replace all chars in selection with dash

---

## Multicursors?

- [Vim multiline editing like in {place your favourite IDE}](https://stackoverflow.com/questions/11784408/vim-multiline-editing-like-in-sublimetext)
- `./example-visual-norm.txt`

---

## `.vimrc`

---

## Plugins

- vundle
- NerdTree
- VimPicker
- VimSurround
- [Fugitive](http://vimcasts.org/episodes/fugitive-vim---a-complement-to-command-line-git/)

---

## Coc

- [language servers](https://en.wikipedia.org/wiki/Language_Server_Protocol)
- autocomplete
- `gd`, `gr`, `<leader>rr`
- `:CocList marketplace`

Example: zoe

---

# ALE

- [linters, formatters](https://github.com/dense-analysis/ale/blob/master/supported-tools.md)
- `:ALENext`

Example: zoe

---

#  Macros

`./example-macro.js`

---

## Sources

- `vimtutor`
- `:help index`
- `:map ge`
- [VimAwesome](https://vimawesome.com/)
- [Reddit](https://www.reddit.com/r/vim/)
- [VimCasts](http://vimcasts.org/)
- [My dotfiles](https://github.com/tommmyy/dotfiles/tree/master/vim)

---

- tmux - terminal multiplexor
- neovim
- vimium
