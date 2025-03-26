import { useEffect, useState, FormEvent } from "react";
import "./index.css";

type Book = {
  id: number;
  title: string;
  author: string;
};

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  const fetchBooks = () => {
    fetch(`${import.meta.env.VITE_API_URL}/books`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const method = editingId ? "PUT" : "POST";
    const url = editingId
      ? `${import.meta.env.VITE_API_URL}/books/${editingId}`
      : `${import.meta.env.VITE_API_URL}/books`;

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, author }),
    });

    setTitle("");
    setAuthor("");
    setEditingId(null);
    fetchBooks();
  };

  const handleEdit = (book: Book) => {
    setTitle(book.title);
    setAuthor(book.author);
    setEditingId(book.id);
  };

  const handleDelete = async (id: number) => {
    const ok = confirm("この本を本当に削除しますか？");
    if (!ok) return;

    await fetch(`${import.meta.env.VITE_API_URL}/books/${id}`, {
      method: "DELETE",
    });
    fetchBooks();
  };

  return (
    <div className="max-w-2xl mx-auto p-6 font-sans">
      <h1 className="text-2xl font-bold mb-4">📚 Book Manager</h1>
      <h2 className="text-red-500">sub title</h2>
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col gap-2 mb-6 p-4 border rounded ${
          editingId ? "bg-yellow-50 border-yellow-400" : "bg-gray-50"
        }`}
      >
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="タイトル"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="著者"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {editingId ? "更新" : "登録"}
          </button>
          {editingId && (
            <button
              type="button"
              className="text-gray-600 border px-4 py-2 rounded hover:bg-gray-100"
              onClick={() => {
                setTitle("");
                setAuthor("");
                setEditingId(null);
              }}
            >
              キャンセル
            </button>
          )}
        </div>
      </form>

      <ul className="space-y-3">
        {books.map((book) => (
          <li
            key={book.id}
            className="flex justify-between items-center border p-3 rounded"
          >
            <div>
              <strong>{book.title}</strong> by {book.author}
            </div>
            <div className="space-x-2">
              <button
                className="text-sm text-green-600 hover:underline"
                onClick={() => handleEdit(book)}
              >
                編集
              </button>
              <button
                className="text-sm text-red-600 hover:underline"
                onClick={() => handleDelete(book.id)}
              >
                削除
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
