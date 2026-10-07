# Agent context exclusions

Before broad file listing, search, or reads, treat the repository-root `.codexignore` as an additional context exclusion list and skip matching paths. Do not open excluded files unless the user explicitly asks or the task requires inspecting one of them.

These patterns control agent context only. Do not delete matching files or change Git tracking, build, or deployment behavior because of this file.
