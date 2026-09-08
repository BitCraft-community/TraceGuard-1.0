const mongoose = require("mongoose");

const webhookConfigSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true
        },

        name: {
            type: String,
            required: true,
            trim: true
        },

        url: {
            type: String,
            required: true,
            trim: true
        },

        secret: {
            type: String,
            default: null,
            trim: true
        },

        events: {
            type: [String],
            default: ["critical_error", "server_error"],
            validate: {
                validator: function (events) {
                    return Array.isArray(events) && events.length > 0;
                },
                message: "At least one event type must be specified."
            }
        },

        isActive: {
            type: Boolean,
            default: true
        },

        retryCount: {
            type: Number,
            default: 3,
            min: 0,
            max: 5
        },

        lastTriggeredAt: {
            type: Date,
            default: null
        },

        lastStatus: {
            type: String,
            enum: ["success", "failed", "pending", null],
            default: null
        }
    },
    {
        timestamps: true
    }
);

// Compound indexes for efficient alerting lookup & user queries
webhookConfigSchema.index({ userId: 1, isActive: 1 });
webhookConfigSchema.index({ isActive: 1, events: 1 });

module.exports = mongoose.model("WebhookConfig", webhookConfigSchema);
