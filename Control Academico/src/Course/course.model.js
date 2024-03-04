'use strict'

import { Schema, model } from 'mongoose'

export const courseSchema = Schema({
    name: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        uppercase: true,
        enum: ['CUARTO DIVERSIFICADO', 'QUINTO DIVERSIFICADO', 'SEXTO DIVERSIFICADO'],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    teacher: {
        type: Schema.ObjectId,
        ref: 'user',
        required: true
    },
    students: [{
        type: Schema.ObjectId,
        ref: 'user',
    }]
})

export default model('course', courseSchema)
