<script>
  import { onMount } from "svelte";

  onMount(async () => {
    const response = await fetch("/code");
    const fileContent = await response.text();
    let scriptElement = document.createElement("script");
    scriptElement.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.40.0/min/vs/loader.min.js"
    );
    document.body.appendChild(scriptElement);

    scriptElement.addEventListener("load", () => {
      // @ts-ignore
      require.config({
        paths: {
          vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.40.0/min/vs",
        },
      });

      // @ts-ignore
      require(["vs/editor/editor.main"], () => {
        // @ts-ignore
        monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
          noSemanticValidation: true,
          noSyntaxValidation: true,
        });
        // @ts-ignore
        let editorInstance = monaco.editor.create(
          document.getElementById("editor"),
          {
            value: fileContent,
            language: "typescript",
            automaticLayout: true,
            padding: { top: 5, right: 5, bottom: 5, left: 5 },
            overviewRulerLanes: 0,
            overviewRulerBorder: false,
            theme: "vs-dark",
          }
        );

        // Add event listener for value changes
        editorInstance.onDidChangeModelContent(() => {
          const updatedSourceCode = editorInstance.getValue();
          console.log({ updatedSourceCode });
        });
      });
    });
  });
</script>

<div id="editor" class="flex-1"></div>
