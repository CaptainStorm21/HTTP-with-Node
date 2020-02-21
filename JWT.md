JWT 

JWT - based 64 encoded version of data
Consistes of three parts, separated by dots
    - Header - defines hashing algorithm
    - Payload - expiry, issued at the time (IAT), public claims
    - Signature - has of the header and payload and a secret
