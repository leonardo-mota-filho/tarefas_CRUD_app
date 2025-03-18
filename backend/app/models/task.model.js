export default (mongoose) => {
    let schema = mongoose.Schema(
        {
            title: String,
            description: String,
            published: Boolean
        },
        {timestamps: true}
    );

    schema.method("toJSON",function(){
        const {_v,_id,...object} = this.toObject();
        object.id = _id;
        return object;
    });

    const Task = mongoose.model("task",schema);
    return Task;
}