//void* malloc(size_t size);

void malloc(size_t size, void* memory);

/*
-- PL/SQL
DECLARE FUNCTION mallocation (IN size BIGINT, IN OUT memory BLOG)
BEGIN
    -- LOT AND LOTS OF WORDS
    memory = SELECT * FROM whatever LIMIT 1;
END
*/

void zero(void* memory, size_t memory);

void foo()
{
    void* memory = NULL;
    //memory = malloc(64);
    malloc(64, memory);
    // memory is not NULL
    zero(memory, 64);
    // memory is NULL
}
