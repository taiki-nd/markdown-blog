//インストールした機能をimportする
import "inline-attachment/src/inline-attachment";
import "inline-attachment/src/codemirror-4.inline-attachment";
import 'simplemde/dist/simplemde.min.css'
import SimpleMDE from "simplemde";
import Rails from '@rails/ujs'

window.onload = function () {
  // textareaをMarkdownエディタにする
  const simplemde = new SimpleMDE({
    element: document.getElementById("markdown-editar"),
  });
  // エディタに画像がドラッグ&ドロップされた際の処理
  inlineAttachment.editors.codemirror4.attach(simplemde.codemirror, {
    uploadUrl: "/posts/attach", // POSTする宛先Url
    uploadFieldName: "image", // ファイルのフィールド名(paramsで取り出す時のkey)
    allowedTypes: ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'],
    extraHeaders: { "X-CSRF-Token": Rails.csrfToken() }, // セキュリティ対策
  });
};