#ifndef __dbg_h__
#define __dbg_h__

#include <stdio.h>
#include <errno.h>
#include <string.h>

#ifdef NDEBUG
#define debug(M, ...)
#else
#define debug(M, ...) fprintf(stderr, "DEBUG %s:%d: " M "\n", __FILE__, __LINE__, ##__VA_ARGS__)
#endif

// the clean_errno macro that's used in the others to get a safe readable version
// of errno
#define clean_errno() (errno == 0 ? "None" : strerror(errno))

// vvv  macros for logging messages meant for the end user.
#define log_err(M, ...) fprintf(stderr, "[ERROR] (%s:%d: errno: %s) " M "\n", __FILE__, __LINE__, clean_errno(), ##__VA_ARGS__)

#define log_warn(M, ...) fprintf(stderr, "[WARN] (%s:%d: errno: %s) " M "\n", __FILE__, __LINE__, clean_errno(), ##__VA_ARGS__)

#define log_info(M, ...) fprintf(stderr, "[INFO] (%s:%d) " M "\n", __FILE__, __LINE__, ##__VA_ARGS__)
// ^^^  macros for logging messages meant for the end user.

// checks to make sure condition A is true otherwise it logs the error M.
// then jumps to the function's error: for cleanup.
#define check(A, M, ...) if(!(A)) { log_err(M, ##__VA_ARGS__); errno=0; goto error; }

// placed in part of a function that shouldn't run. Used in if/else and switch
// statements to catch conditions that shouldn't happen.
#define sentinel(M, ...)  { log_err(M, ##__VA_ARGS__); errno=0; goto error; }

// vv makes sure the pointer is valid
#define check_mem(A) check((A), "Out of memory.")

// vv error goes of but the message isn't printed.
#define check_debug(A, M, ...) if(!(A)) { debug(M, ##__VA_ARGS__); errno=0; goto error; }

#endif
