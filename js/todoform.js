export default function TodoForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <input className="form-control" placeholder="Введите задачу" value={props.value} onChange={props.onChange}/>
            <button type="submit" className="btn btn-primary my-2">Добавить задачу</button>
        </form>
    );
}