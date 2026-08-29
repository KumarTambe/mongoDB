import mg from 'mongoose'

const jobApplicationSchema = new mg.Schema({
    applicantName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    jobTitle: { type: String, required: true },
    salary: { type: Number, default: 0 },
    appliedAt: { type: Date, default: Date.now },
    status: { type: String, default: "pending" }
})

const JobApplication = mg.model('JobApplication', jobApplicationSchema)

export default JobApplication