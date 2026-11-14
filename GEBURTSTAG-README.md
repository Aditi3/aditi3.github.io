# Geburtstag.html – birthday website

## Run it
YouTube music only works when the page is served over http(s) — not by double-clicking the file (`file://`).
Run `python3 -m http.server 8000` in this folder and open http://localhost:8000/Geburtstag.html,
or publish it with GitHub Pages. Keep `images/` and `audio/` next to the HTML file.

## Soundtrack
Press **Turn on the birthday soundtrack** (bottom-right). Nothing plays before that click.
The music crossfades (~1.8 s) as you scroll:

| Section | Primary (YouTube, hidden player) | Fallback |
|---|---|---|
| Opening page | "Zum Geburtstag viel Glück" (`fNUAqFRIMaE`) | synthesized birthday melody |
| Game on, Sebastian! | Linkin Park – Somewhere I Belong (`zsCD5XCu6CM`) | `audio/somewhere-i-belong.mp3` |
| A heart that makes a difference. | Why This Kolaveri Di (`YR12Z8f1Dh8`) | `audio/why-this-kolaveri-di.mp3` |

Sections in between keep the current song. Music pauses when the tab is hidden.
If YouTube is blocked, offline, or the video disallows embedding, the page tries the fallback; if that is
missing too, it shows a small notice and keeps the current music going.

To change a song, edit the video ID in the `TRACKS` block in the script.
The `audio/` mp3 files are optional empty placeholders for licensed files of your own.

## Piano
Open the birthday note at the bottom, then tap the keys, or tap the piano body to play the birthday melody.
