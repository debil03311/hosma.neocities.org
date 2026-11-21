
const pwdSpan = document.getElementById("pwd");
pwdSpan.innerText = "~" + window.location.pathname;

const files = {
    "cat.png": "-r--r--r--+ 1 hosma None 0\tJan  1 2022",
    "css/": "dr--r--r--+ 1 hosma None 0\tJan  2 2022",
    "icofont/": "dr--r--r--+ 1 hosma None 0\tJan  1 2022",
    "index.css": "-r--r--r--+ 1 hosma None 4465\tJan  1 2022",
    "index.html": "-r-xr-xr--+ 1 hosma None 2829\tJan  2 2022",
    "index.js": "-r--r--r--+ 1 hosma None 505\tJan  1 2022",
    "index.m.css": "-r--r--r--+ 1 hosma None 505\tJan  1 2022",
    "js/": "dr--r--r--+ 1 hosma None 0\tJan  1 2022",
    "page/": "dr--r--r--+ 1 hosma None 0\tJan  1 2022",
    "reimu.png": "-r--r--r--+ 1 hosma None 0\tJan  1 2022",
    "test.txt": "-r--r--r--+ 1 hosma None 0\tJan  2 2022",
    "theme/": "dr--r--r--+ 1 hosma None 0\tJan  1 2022",
}

const programs = {
    cat: {
        help: "Concatenate files to standard output.",
        exe: async (args)=> {
            const filename = args[0];
            if (!filename) return;

            const data = await fetch(baseUrl+filename)
                .then((resp)=> resp.text())
                .then((data)=> data)
                .catch((error)=> {
                    console.error(error);
                    return `cat: ${filename}: No such file or directory.`;
                })

            programs.echo.exe([data]);
        },
    },

    cd: {
        help: "Changes the current directory.",
        exe:(args)=> {
            let destination = args[0];

            // POSH stands for Pretty Useless SHell
            (destination) && programs.echo.exe([
                "push: cd: Permission denied."
            ]);

            // if (destination == "..")
            //     destination = filesystem[DOMConsole.pwd].parent

            // (destination)
            //     ? DOMConsole.setDir(destination)
            //     : commandNotFound()
        },
    },

    clear: {
        help: "Clears the console screen.",
        exe:()=> {
            htmlConsole.screen.innerText = "";
        },
    },

    echo: {
        help: "Displays messages.",
        exe:(args)=> {
            // If the console screen is empty,
            // don't prepend a newline character.
            const nl = htmlConsole.screen.innerText ? "\n" : "";
            htmlConsole.screen.append(nl + args.join(" "));
        },
    },

    eval: {
        help: "Evaluate JavaScript expressions.",
        exe:(args)=> {
            try {
                const jsString = args.join(" ");
                programs.echo.exe([eval(jsString)]);
            } catch (error) {
                console.error(error);
                programs.echo.exe([error]);
            }
        },
    },

    help: {
        help: "Provides help information.",
        exe:()=> {
            for (const p in programs) {
                programs.echo.exe([`${p}\t${programs[p].help}`]);
            }
        },
    },

    ls: {
        help: "List information about the files in the current directory.",
        exe:()=> {
            for (const f in files) {
                programs.echo.exe([`${files[f]} ${f}`]);
            }
        }
    },

    mkdir: {
        help: "Creates a directory.",
        exe:()=> programs["echo"].exe(["The current filesystem is read-only."]),
    },

    rm: {
        help: "Remove (unlink) files.",
        exe:()=> programs["echo"].exe(["The current filesystem is read-only."]),
    },
}

// Prints command not found message to the
// HTML console
const commandNotFound=(cmd)=>
    programs.echo.exe([`${cmd}: command not found`]);


class Console {
    constructor(dir) {
        // this.pwd = "~";
        this.pwd = dir;
        this.history = [""];
        this.historyIndex = -1;
    }

    setDir(dir) {
        this.pwd = dir;
    }

    getDir=()=> dir;
}

const DOMConsole = new Console(pwdSpan);

const htmlConsole = {
    wrapper: document.getElementById("console"),
    screen: document.getElementById("console-screen"),
    input: document.getElementById("console-input"),
}

// Open the console on tilde

window.addEventListener("keydown",(e)=> {
    if (e.key == "`") {
        e.preventDefault();
        htmlConsole.wrapper.classList.toggle("hidden");
        htmlConsole.input.focus();
    }
});

// React to console input

htmlConsole.input.addEventListener("keydown",(e)=> {
    const action = consoleKeyMap[e.key];
    if (action) {
        e.preventDefault();
        action(e);
    }

    if (e.ctrlKey && e.key == "l") {
        e.preventDefault();
        htmlConsole.screen.innerHTML = "";
    }
});

const consoleKeyMap = {
    ArrowUp:(e)=> {
        if (DOMConsole.historyIndex < DOMConsole.history.length-1)
            DOMConsole.historyIndex++;

        htmlConsole.input.innerText =
            DOMConsole.history[DOMConsole.historyIndex];

        if (DOMConsole.history[0] != "") {
            DOMConsole.history = [""].concat(DOMConsole.history);
            DOMConsole.historyIndex++;
        }
    },

    ArrowDown:(e)=> {
        if (DOMConsole.historyIndex > 0)
            DOMConsole.historyIndex--;

        htmlConsole.input.innerText =
            DOMConsole.history[DOMConsole.historyIndex];
    },

    Enter:(e)=> {
        if (!htmlConsole.input.innerText.length) return;

        const command = htmlConsole.input.innerText;
        htmlConsole.input.innerText = "";

        executeCommand(command);
        DOMConsole.historyIndex = -1;

        // Remove heading "" from the history
        if (DOMConsole.history[0] == "")
            DOMConsole.history.shift();

        // Push "" and the command to the history;
        DOMConsole.history = [command].concat(DOMConsole.history);

        htmlConsole.screen.scrollTo(0, htmlConsole.screen.scrollHeight);
    },

    Tab:(e)=> e.preventDefault(),
}

function executeCommand(cmd) {
    // Initial arguments include the command
    const args = cmd.split(" ");

    // Store the command by itself
    cmd = args[0];

    // Remove command from arguments
    args.shift();

    // If the command is valid, execute and
    // store it into the command history array.
    // Otherwise, echo an error message to the
    // console.

    (programs[cmd])
        ? programs[cmd].exe(args)
        : commandNotFound(cmd)
}