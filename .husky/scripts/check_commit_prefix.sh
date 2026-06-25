#!/bin/sh

commit_msg_file="$1"
original_first_line=$(head -n 1 "$commit_msg_file")

if grep -qE '^Merge ' "$commit_msg_file"; then
  exit 0
fi

allowed_prefixes="^(:sparkles:|:art:|:recycle:|:zap:|:bug:)"

if ! echo "$original_first_line" | grep -qE "$allowed_prefixes"; then
  echo "\033[31m❌ 커밋 메시지의 첫 줄은 반드시 다음 prefix 중 하나로 시작해야 합니다:\033[0m" >&2
  echo "\033[31m   :sparkles:, :art:, :recycle: :zap: :bug:\033[0m" >&2
  echo "" >&2
  echo "\033[31m커밋이 중단되었습니다. 올바른 prefix로 수정해 주세요.\033[0m" >&2
  exit 1
fi
