// export function action({ request }: { request: Request }) {
//   console.log(request);
// }

export default function New() {
  return (
    <div>
      <p>Add your hilarous joke</p>
      <form method="post">
        <div>
          <label htmlFor="name">
            Name:
            <input id="name" name="name" type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="content">
            Content:
            <input id="content" name="content" type="text" />
          </label>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
