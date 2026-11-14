# Geburtstag.html – birthday website

## Run it
YouTube music only works when the page is served over http(s) — not by double-clicking the file (`file://`).
Run `python3 -m http.server 8000` in this folder and open http://localhost:8000/Geburtstag.html,
or publish it with GitHub Pages. Keep `images/` and `audio/` next to the HTML file.

## Soundtrack
Press **Turn on the birthday soundtrack** (bottom-right). Nothing plays before that click.
The music crossfades (~1.8 s) as you scroll:

| Section | Track | Backup |
|---|---|---|
| Opening page | "Zum Geburtstag viel Glück" (YouTube `fNUAqFRIMaE`) | synthesized birthday melody |
| Plenty of game left, Sebastian. | `audio/somewhere-i-belong.mp3` | YouTube `zsCD5XCu6CM` |
| Where the heart flies (map) | `audio/what-a-wonderful-world.mp3` | – |
| A heart that makes a difference. | `audio/why-this-kolaveri-di.mp3` | YouTube `YR12Z8f1Dh8` |

Sections in between keep the current song. Music pauses when the tab is hidden.
If a file is missing, the page tries the backup; if that fails too, it shows a small notice and keeps the current music going.
YouTube backups only work when the page is served over http(s) (e.g. GitHub Pages), not from `file://`.
To change a song, edit the `TRACKS` block in the script.

## Piano
Open the birthday note at the bottom, then tap the keys, or tap the piano body to play the birthday melody.
