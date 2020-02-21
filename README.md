REST/RESTful

* Architectura style / design
* REpresentational State Transfer
* Depends on HTTP as the protocol
    * not a requirement

What is REpresentational State Transfer?
*  transferring representatons
*  representation: a resource
* Transfer: Take a resource on the server and transfer it to an applciation state(client)

State(less)
* every single request from any cllient hold all the necessary info to be able to server the resource entirely
* no state is being managed by the server

6 design pricipals

    1.  Resources 
        * nouns in plural from
        * Entity ! = single data Entity (entity may not come from singe source (2 databases for instance))
        * Products. Employees. Orders, Payments Cars
    2. Resource Identifiers
        * URI - Uniform Resource Identifiers
        * Unique per entity and / or per collection
        * Access resource via URI http://domain.com/departments 
        * Access a single resource http://domain.com/departments/1
    3. Resource Hieracrhy
        * Group resources in a logical way
        * Think about heirorchaies ahead of time
            * Connection ebtween a product and an Order
            * should list all orders for Product 12 /products/12/orders
        * Use HATEOAS to navigate between resources
    4. Resource representation
        *   Defines the data respresentation of the returned resource
        *  Typically either XML or JSON
    5. HTTP Methods
        * GET - return resource
        * POST - creates a new resources
        * PUT - creates or replaces a resource
        * PATCH - updates partial a resources
        * DELETE - deles a resource
   
    4. Resource representation
        *   Defines the data respresentation of the returned resource
        *  Typically either XML or JSON
    5. HTTP Methods
        * GET - return resource
        * POST - creates a new resources
        * PUT - creates or replaces a resource
        * PATCH - updates partial a resources
        * DELETE - deles a resource
    6.     HTTP Semantics and Status Codes
        GET
            200 -  OK
            4O4 - not found
        POST
            201 - Created
            400 - Bad request
        PUT
            201 - Created
            204 - No Content
            200 - OK
            409 - Conflict
        PATCH
            204 - No Content
            400/409
        DELETE
            204(NO Content)
            404(Not found)

        Errors
            1xx - Information messages
            2xx - success messages
            3xx - redirection messages
            4xx - client error messages
            4xx - Server Error Messages
     
