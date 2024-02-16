const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')
const SALT_ROUNDS = 6

const userSchema = new Schema ({
    name: { type: String, required: true },
    email: { type: String, unique: true, trim: true, lowercase: true, required: true },
    password: {type: String, trim: true, minLength: 8, required: true},
    bookmarks: [{ type: Schema.Types.ObjectId, ref: 'Bookmark' }]
}, {
    timestamps: true,
    toJSON: {
        transform(doc, ret) {
            delete ret.password
            return ret
        }
    }
})