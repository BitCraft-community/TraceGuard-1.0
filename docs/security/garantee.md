## Security & Privacy Guarantees

- **Cryptographic Provenance**: Published via automated GitHub Actions with npm provenance enabled.
- **Zero Runtime Dependencies**: The SDK has zero external runtime dependencies, minimizing supply-chain exposure.
- **Write-Only Ingestion**: Client initialization keys can only append breadcrumbs and events; they cannot query or read data.
- **Built-in PII Redaction**: Passwords, API tokens, and authorization headers are scrubbed locally before dispatch.
- **Fail-Safe Operation**: All telemetry calls are fully sandboxed and asynchronous—an SDK error will never break your host application.
- **Data Control**: Inspect or reject payloads locally before transmission using the `beforeSend` callback.
